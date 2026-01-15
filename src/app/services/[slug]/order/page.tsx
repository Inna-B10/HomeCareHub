import { ServiceForm } from '@/components/ServiceForm'
import { services } from '@/data/services'
import { ServiceRequestForm } from '@/types/serviceForms'
import { notFound } from 'next/navigation'

type ServiceProps = {
  params: Promise<{
    slug: string
  }>
}
export default async function OrderPage(props:ServiceProps) {
    const params = await props.params
    const {slug} = params
  
    const service = services.find((s)=> s.slug===slug)
  
    if(!service) notFound()

  return (
       <ServiceForm<ServiceRequestForm>
      serviceType={slug as ServiceRequestForm['serviceType']}
    />
  )
}
