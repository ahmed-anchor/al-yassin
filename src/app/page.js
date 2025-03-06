import { SinglePage } from "@/components/SinglePage";
import { getAdminSession, getUserSession } from "../../lib/lib";
import { Modal } from "@/components/Modal";


export default async function Home() {

  const userSession = await getUserSession();
  const adminSession = await getAdminSession();


  if(!userSession && !adminSession) return <Modal />

  return <SinglePage />

}