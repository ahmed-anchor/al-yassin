import { Projects } from '@/components/pages/Projects';
import { getAdminSession, getUserSession } from '../../../lib/lib'
import { redirect } from 'next/navigation';

export default async function page() {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();

  if(!userSession && !adminSession) redirect('/userFrom');
  
  return <Projects />
}
