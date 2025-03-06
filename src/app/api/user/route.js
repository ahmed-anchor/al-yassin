import { NextResponse } from "next/server"
import connectDB from "../../../../lib/database"
import UserModel from "../../../../models/userModel";
import { cookies } from "next/headers";

export async function POST(req) {
  
  try {
    const body = await req.json();
    console.log(body)

    const {phoneNumber, username} = body

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
    
    return NextResponse.json({message: true})

  } catch (error) {
    
    console.error(error)

    return NextResponse.error({ message: false })
  }
}
