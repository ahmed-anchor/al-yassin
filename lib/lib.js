"use server"
import { cookies } from "next/headers";
import connectDB from "./database";
import AdminModel from "../models/adminModel";
import { v4 } from "uuid";

export async function getSession() {
  const sessionCookie = cookies().get('session');
  await connectDB();
  const admin = await AdminModel.findOne()

  // Check if cookie exists and has a value
  if (admin.token !== sessionCookie?.value) return null
  if (!sessionCookie?.value) return null;
  return sessionCookie.value;
}

export async function getUserSession() {
  const sessionCookie = cookies().get('userSession');
  // Check if cookie exists and has a value
  if (!sessionCookie?.value) return null;
  return sessionCookie.value;
}

export async function getAdminSession() {
  const sessionCookie = cookies().get('adminSession');
  // Check if cookie exists and has a value
  if (!sessionCookie?.value) return null;
  return sessionCookie.value;
}


export async function regenerateDatabaseToken({username, password}) {
  setTimeout(async()=>{
    try {
      const token = v4();
  
      await connectDB();
  
      // Find admin and update token
      const admin = await AdminModel.findOneAndUpdate(
        { username, password }, // Find by credentials
        { $set: { token } },     // Update the token field
        { new: true }            // Return the updated document
      );
  
    } catch (error) {
      console.log(error)
    }
  }, 60 * 60 * 1000)
}