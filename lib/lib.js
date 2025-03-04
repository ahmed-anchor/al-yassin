"use server"
import { cookies } from "next/headers";
import connectDB from "./database";
import AdminModel from "../models/adminModel";

export async function login(formData) {
  if (!formData.get('username') || !formData.get('password')) return;
  
  try {
    await connectDB();
    const admin = await AdminModel.findOne();
    const username = formData.get('username');
    const password = formData.get('password');

    
    
    if (username == admin.username || password == admin.password) {
      // Set cookie
      cookies().set('session', 'true', { 
        expires: new Date(Date.now() + 60 * 60 * 1000), // 1 minute
        httpOnly: true,
        sameSite: 'strict'
      });
      // Check if cookie exists (not necessary here, but for demonstration)
      const sessionCookie = cookies().get('session');
      console.log('Session cookie set:', sessionCookie?.value);
    }

  } catch (error) {
    console.error('Login error:', error);
    return { error: "Failed to login" };
  }
}

export async function getSession() {
  const sessionCookie = cookies().get('session');
  // Check if cookie exists and has a value
  if (!sessionCookie?.value) return null;
  console.log(sessionCookie.value)
  return sessionCookie.value;
}

export async function changeCredentials (formData) {

  const newAdminCredentials = { newUsername: formData.get('username'), newPass: formData.get('password') }
  try {
    await connectDB();
    await AdminModel.deleteMany({})
    await AdminModel.create({username: newAdminCredentials.newUsername , phoneNumber: newAdminCredentials.newPass})
    const admin = await AdminModel.findOne()
    console.log('changed', admin )
    return true
  } catch (error) {
    console.log('error with internet', error)
  }

}