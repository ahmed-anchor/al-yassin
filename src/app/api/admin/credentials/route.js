import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/database";
import AdminModel from "../../../../../models/adminModel";
import { cookies } from "next/headers";
import { v4 } from "uuid";


export async function POST (req) {
  try {
    const body = await req.json();

    const {username, password} = body
    const sessionCookie = cookies().get('session');
    const token = sessionCookie.value
    await connectDB();

    await AdminModel.deleteMany({})

    await AdminModel.create({username, password, token})

    return NextResponse.json(true)
  } catch(error) {
    return NextResponse.json(false)
  }
}