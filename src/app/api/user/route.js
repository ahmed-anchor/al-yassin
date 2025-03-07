import { NextResponse } from "next/server"
import connectDB from "../../../../lib/database"
import UserModel from "../../../../models/userModel";
import { cookies } from "next/headers";
import { getSession } from "../../../../lib/lib";

export async function POST(req) {
  try {

    const body = await req.json();

    const {phoneNumber, username} = body


    const regex = /^(010|011|012|015)\d{8}$/;
    if (phoneNumber.length !== 11 || !regex.test(String(phoneNumber))) return NextResponse.json(false);

    await connectDB();
    
    const usersData = await UserModel.findOneAndUpdate(
      {phoneNumber: phoneNumber},
      { $set: {username: username} },
      { new: true, upsert: true, runValidators: true }
    )


    if (!usersData) {
      await UserModel.create({
        phoneNumber: phoneNumber,
        username: username
      })
    }

    cookies().set('userSession', 'true', { 
      expires: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 month
      httpOnly: true,
      sameSite: 'strict'
    });
    
    return NextResponse.json(true)

  } catch (error) {

    return NextResponse.error({ message: 'error with server' })
  }
}


export async function GET () {
  try {
    const session = await getSession();
    if(!session) return NextResponse.json({message: "you're not allowed here"})

    await connectDB();
    const users = await UserModel.find();

    return NextResponse.json(users)

  } catch (error) {
    return NextResponse.json(false)
  }
}

export async function PUT (req) {
  try {
    const session = await getSession();
    if(!session) return NextResponse.json({message: "you're not allowed here"})
    const id = await req.json();

    await connectDB();
    await UserModel.findByIdAndDelete(id);

    return NextResponse.json(true)

  } catch (error) {
    return NextResponse.json(false)
  }
}
