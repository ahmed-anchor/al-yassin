import { NextResponse } from "next/server";
import connectDB from "../../../../lib/database";
import AdminModel from "../../../../models/adminModel";
import { cookies } from "next/headers";
import { v4 } from "uuid";
import { regenerateDatabaseToken } from "../../../../lib/lib";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    await connectDB();

    // Find admin by username
    const admin = await AdminModel.findOne({ username });
    if (!admin) return NextResponse.json(false);

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return NextResponse.json(false);

    // Generate new token
    const token = v4();

    // Update admin token
    await AdminModel.findByIdAndUpdate(
      admin._id,
      { $set: { token } },
      { new: true }
    );

    // Set cookies
    cookies().set('session', token, { 
      expires: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours
      httpOnly: true,
      sameSite: 'strict',
      secure: true
    });
    
    cookies().set('adminSession', 'true', {
      expires: new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000), // 12 months
      httpOnly: true,
      sameSite: 'strict'
    });

    // Regenerate token after 1 hour
    regenerateDatabaseToken(token);

    return NextResponse.json(true);

  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' });
  }
}