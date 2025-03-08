import { NextResponse } from "next/server";
import connectDB from "../../../../lib/database";
import AdminModel from "../../../../models/adminModel";
import { cookies } from "next/headers";
import { v4 } from "uuid";
import { regenerateDatabaseToken } from "../../../../lib/lib";


export async function POST(req) {
  try {

    const body = await req.json();
    const { username, password } = body;
    const token = v4();

    await connectDB();

    // Find admin and update token
    const admin = await AdminModel.findOneAndUpdate(
      { username, password }, // Find by credentials
      { $set: { token } },     // Update the token field
      { new: true }            // Return the updated document
    );

    if (!admin) {
      return NextResponse.json(false);
    }

    // Set cookies
    cookies().set('session', token, { 
      expires: new Date(Date.now() + 60 * 60 * 1000),
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === "production"
    });
    
    cookies().set('adminSession', 'true', { 
      expires: new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: 'strict'
    });
    regenerateDatabaseToken(body)
    
    return NextResponse.json(true);

  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' });
  }
}