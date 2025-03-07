import { getAdminSession, getUserSession } from '../../../lib/lib'
import { redirect } from 'next/navigation';
import { Contact } from '@/components/pages/Contact';

export default async function page() {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();

  if(!userSession && !adminSession) redirect('/userFrom');
  
  return <Contact />
}
