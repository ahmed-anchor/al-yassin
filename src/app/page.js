import { SinglePage } from "@/components/SinglePage";
import { getAdminSession, getUserSession } from "../../lib/lib";
import { redirect } from "next/navigation";


export default async function Home() {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();

  // if(!userSession && !adminSession) redirect('/userFrom')

  return <SinglePage />

}