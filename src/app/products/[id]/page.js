import { getAdminSession, getUserSession } from '../../../../lib/lib';
import { redirect } from 'next/navigation';
import { Pipes } from '@/components/pages/Pipes';

export default async function page({params}) {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();

  if(!userSession && !adminSession) redirect('/userFrom');
  
  return <Pipes params={params} />
}
