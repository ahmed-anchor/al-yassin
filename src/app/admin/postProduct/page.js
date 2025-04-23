import ProductForm from '@/components/pages/post/ProductForm'
import { getSession } from '../../../../lib/lib'
import { AdminForm } from '@/components/admin/AdminForm';

export default async function page() {

  const session = await getSession();

  if(session) return <ProductForm />

  return <AdminForm />
}
