import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/database";
import AdminModel from "../../../../../models/adminModel";
import { cookies } from "next/headers";
import { getSession } from "../../../../../lib/lib";
import bcrypt from 'bcryptjs';

export async function POST (req) {
  try {
    const session = await getSession();
    if(!session) return NextResponse.json(null);

    const body = await req.json();
    const { username, password } = body;
    const sessionCookie = cookies().get('session');
    const token = sessionCookie.value;

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB();
    await AdminModel.deleteMany({});
    await AdminModel.create({ username, password: hashedPassword, token });

    return NextResponse.json(true);
  } catch(error) {
    return NextResponse.json(false);
  }
}