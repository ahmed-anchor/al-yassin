import React from 'react';
import { getSession } from '../../../lib/lib';
import { AdminForm } from '@/components/admin/AdminForm';
import { Dashboard } from '@/components/admin/Dashboard';

export default async function AdminPage() {
  const session = await getSession();

  if (session) return <Dashboard />

  return <AdminForm />
}
