
import { SinglePage } from "@/components/SinglePage";
import { getUserSession } from "../../lib/lib";



export default async function Home() {

  const userSession = await getUserSession();
  
  return <SinglePage userSession={userSession} />

}