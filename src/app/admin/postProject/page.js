import ProjectForm from '@/components/pages/post/ProjectForm';
import { getSession } from '../../../../lib/lib'
import { AdminForm } from '@/components/admin/AdminForm';

export default async function page() {

  const session = await getSession();

  if(session) return <ProjectForm />

  return <AdminForm />
}
