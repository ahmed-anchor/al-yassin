import { NextResponse } from "next/server"
import connectDB from "../../../../lib/database"
import UserModel from "../../../../models/userModel";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body)

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
