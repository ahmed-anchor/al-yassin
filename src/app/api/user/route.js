import { NextResponse } from "next/server"
import connectDB from "../../../../lib/database"
import UserModel from "../../../../models/userModel";
import { cookies } from "next/headers";
import { getSession } from "../../../../lib/lib";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNumber, username } = body;

    // Validate phone number format
    const regex = /^(010|011|012|015)\d{8}$/;
    if (phoneNumber.length !== 11 || !regex.test(phoneNumber)) {
      return NextResponse.json(false);
    }

    await connectDB();

    const result = await UserModel.findOneAndUpdate(
      { phoneNumber: phoneNumber.trim() },
      { 
        $setOnInsert: { // Only set these on creation
          username: username.trim(),
          phoneNumber: phoneNumber.trim()
        }
      },
      { 
        upsert: true,
        new: true,
        runValidators: true,
        rawResult: true // Get MongoDB driver result
      }
    );

    console.log(result)
    
    // Check if it was an insert (new user)
    if (!result) return NextResponse.json(false);
      // Set cookie only for new users
      
      
    cookies().set('userSession', 'true', { 
      expires: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months
      httpOnly: true,
      sameSite: 'strict'
    });
    return NextResponse.json(true)
    
  } catch (error) {
    return NextResponse.json(false);
  }
}


export async function GET () {
  try {
    const session = await getSession();
    if(!session) return NextResponse.json(null)

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
    if(!session) return NextResponse.json(null)

    const id = await req.json();

    await connectDB();
    await UserModel.findByIdAndDelete(id);

    return NextResponse.json(true)

  } catch (error) {
    return NextResponse.json(false)
  }
}
