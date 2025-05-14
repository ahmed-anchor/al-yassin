import connectDB from "../../../../../lib/database";
import ProjectModel from "../../../../../models/projectModel";
import { writeFile } from "fs/promises";
import sharp from "sharp";
import { unlink } from "fs/promises";
import path from "path";
import { getSession } from "../../../../../lib/lib";
import { transliterate } from "transliteration";
import { NextResponse } from "next/server";
import { put, del } from "@vercel/blob";


export async function POST(req) {

  try {
    // checking if authenticated or not
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { message: "You are not authenticated!" },
        { status: 505 }
      );
    }
    const formData = await req.formData();

    const { image, name, description } = Object.fromEntries(formData);

    if (!image || !name || !description) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    await connectDB();

    const buffer = Buffer.from(await image.arrayBuffer());
    const outputBuffer = await sharp(buffer).resize({
      width: 1500,
      height: 320,
      fit: "inside",
      position: "center",
      withoutEnlargement: true 
    })
    .webp({
      quality: 80,
      effort: 6,
    }).toBuffer();

    const cleanString = (str) => 
    str.trim()
    .replace(/[^a-zA-Z\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
    
    const fileName = transliterate(name)
    const cleanedFileName = cleanString(fileName)+".webp";
    // const filePath = path.join(process.cwd(), "public", 'projects',cleanedFileName)
    // await writeFile(filePath, outputBuffer);

    // Upload to Vercel Blob
    const { url } = await put(
      `projects/${Date.now()}-${cleanedFileName}`,
      outputBuffer,
      { access: 'public' }
    );


    await ProjectModel.create({
      name,
      description,
      image: url,
    });


    return NextResponse.json(
      { message: "Uploaded successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong. Try again" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {

    await connectDB();
    const projects = await ProjectModel.find();

    if (!projects) {
      return NextResponse.json(
        { message: "No projects found" },
        { status: 404 }
      );
    }
    return NextResponse.json(projects)

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong. Try again" },
      { status: 500 }
    );
  }
}


export async function DELETE(req) {
  try {
    await connectDB();
    const {_id} = await req.json();

    const project = await ProjectModel.findById(_id);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    if(project.image.startsWith("https://")) {
      // Delete from Vercel Blob
      await del(project.image); // Uses the stored blob URL

      await ProjectModel.findByIdAndDelete(_id);
      
      return NextResponse.json(
        { message: "Project deleted successfully" },
        { status: 200 }
      );

    }
    


    const filePath = path.join(process.cwd(), "public", project.image);
    await unlink(filePath)
    .then(() => {
      return NextResponse.json(
        { message: "File deleted successfully" },
        { status: 200 }
      );
    })
    .catch(() => {
      return NextResponse.json(
        { message: "File not found" },
        { status: 404 }
      );
    });

    await ProjectModel.findByIdAndDelete(_id);

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Try again" },
      { status: 500 }
    );
  }
}