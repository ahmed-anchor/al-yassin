import React from 'react';
import { login, getSession, changeCredentials } from '../../../lib/lib';
import { redirect } from 'next/navigation';
import { AdminForm } from '@/components/admin/AdminForm';
import { ChangeCredentials } from '@/components/admin/ChangeCredentials';


export default async function AdminPage() {
  const session = await getSession();

  while (session) {
    return <ChangeCredentials />
  }

  return <AdminForm />
}
