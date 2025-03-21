import { Pipes } from '@/components/pages/Pipes';
import Motors from '@/components/pages/Motors';
import Inverters from '@/components/pages/Inverters';
import SolarPlates from '@/components/pages/SolarPlates';
import Cables from '@/components/pages/Cables';
import Tolombat from '@/components/pages/Tolombat';

export default async function page({params}) {
  const { id } = params
  
  if(['faba', 'tokal'].includes(id)) return <Pipes params={params} />
  if('motors' == id) return <Motors />
  if('inverters' == id) return <Inverters />
  if('plates' == id) return <SolarPlates />
  if('cables' == id) return <Cables />
  if('tolombat' == id) return <Tolombat />
}
