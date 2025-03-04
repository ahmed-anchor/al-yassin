import { NextResponse } from "next/server"
import connectDB from "../../../../lib/database"
import UserModel from "../../../../models/userModel";



export async function GET() {
  try {
    await connectDB();

    const usersData = await UserModel.find()

    return NextResponse.json(usersData)

  } catch (error) { 
    
    console.error(error)

    return NextResponse.error({ message: "Something went wrong" })
  }
}

export async function POST() {
  return NextResponse.json({ message: "Hello World" })
}