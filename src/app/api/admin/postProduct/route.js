import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/database";
import ProductModel from "../../../../../models/productModel";
import { writeFile } from "fs/promises";
import sharp from "sharp";
import path from "path";
import { getSession } from "../../../../../lib/lib";
import { transliterate } from "transliteration";
import { mkdirSync } from "fs";
import { unlink } from "fs/promises";
import { rm } from "fs/promises";
import { del } from "@vercel/blob";

export async function POST(req) {
  try {
    // checking if the user is authenticated
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { message: "You are not authenticated!" },
        { status: 505 }
      );
    }

    // connecting to the database
    await connectDB();

    
    // destructuring the data
    const formData = await req.formData();
    const { file, name, description, productType, category } = Object.fromEntries(formData);
    if(!file || !name || !productType) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }
    
    const isEn = (text) => /^[a-zA-Z\s]+$/.test(text)
    if(!isEn(productType)) {
      return NextResponse.json(
        { message: "Product name and type should be in English and without any special chars" },
        { status: 400 }
      );
    }

    const newFileName = cleanString(transliterate(name));
    const newProductType = cleanString(transliterate(productType));

    // checking if the file name already exists
    const existedProduct = await ProductModel.findOne({ fileName: newFileName });
    if (existedProduct) {
      return NextResponse.json(
        { message: "Product already exists!" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const outputBuffer = await sharp(buffer).resize({
      width: 1024,
      height: 1024,
      fit: "inside",
      position: "center",
      withoutEnlargement: true 
    })
    .webp({
      quality: 80,
      effort: 6,
    }).toBuffer();

    const uploadsDir = path.join(process.cwd(), "public", "assets", newProductType);
    const existedProductType = await ProductModel.findOne({ ProductType: newProductType });

    if (!existedProductType) mkdirSync(uploadsDir, { recursive: true });

    const filePath = path.join(uploadsDir, newFileName+".webp");
    await writeFile(filePath, outputBuffer);

    await ProductModel.create({
      name: name,
      fileName : newFileName,
      productType: newProductType,
      description: description,
      image: `/assets/${newProductType}/${newFileName}.webp`,
      categoryName: category.trim(),
    });

    // Return a success response
    return NextResponse.json(
      { message: "Product created successfully!" },
      { status: 200 }
    );

  } catch (error) {
    // returning the error message
    return NextResponse.json(
      { message: "Something went wrong. try again" },
      { status: 500 }
    );
  }
}


function cleanString(str) {
  str = str.trim();
  // First, remove all numbers and special characters, keeping only letters and spaces
  let cleaned = str.replace(/[^a-zA-Z\s]/g, '');
  
  // Then replace spaces with underscores
  let result = cleaned.replace(/\s+/g, '-');
  
  return result;
}



export async function DELETE(req) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 } // Correct status code
      );
    }

    const { _id } = await req.json();
    if (!_id) {
      return NextResponse.json(
        { message: "Missing product ID" },
        { status: 400 }
      );
    }

    await connectDB();

    // Find and delete product first
    
    const product = await ProductModel.findByIdAndDelete(_id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    if(product.image.startWith('https://')) {
      await del(product.image)


      return NextResponse.json(
      { message: "Product and associated files deleted" },
      { status: 200 }
    );
    }

    // Delete associated file
    try {
      const filePath = path.join(process.cwd(), "public", product.image);
      await unlink(filePath);
    } catch (fileError) {
      console.error("File deletion error:", fileError);
      // Continue even if file deletion fails
    }

    // Check remaining products
    const remainingProducts = await ProductModel.find({
      productType: product.productType
    });

    // Delete directory only if no products left
    if (remainingProducts.length === 0) {
      try {
        // Sanitize directory name
        const sanitizedType = product.productType;
        const uploadsDir = path.join(
          process.cwd(),
          "public",
          "assets",
          sanitizedType
        );

        await rm(uploadsDir, {
          recursive: true,
          force: true,
          maxRetries: 3
        });

      } catch (dirError) {
        console.error("Directory deletion error:", dirError);
      }
    }

    return NextResponse.json(
      { message: "Product and associated files deleted" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Global error:", error);
    return NextResponse.json(
      { message: "Server error: " + error.message },
      { status: 500 }
    );
  }
}