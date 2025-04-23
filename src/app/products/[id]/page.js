import { Pipes } from "@/components/pages/Pipes"
import { ProductType } from "@/components/pages/ProductType"


export default function page({params}) {
  const { id } = params
  
  if(['faba', 'tokal'].includes(id)) return <Pipes params={params} />
  return <ProductType id={id} />

}
