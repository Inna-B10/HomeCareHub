import { ServiceForm } from '@/components/ServiceForm'
import { services } from '@/data/services'
import { ServiceRequestForm } from '@/types/serviceForms'
import { notFound } from 'next/navigation'

type ServiceProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage(props:ServiceProps) {
  const params = await props.params
  const {slug} = params

  const service = services.find((s)=> s.slug===slug)

  if(!service) notFound()

  return(
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2>{service.title}</h2>
      <p>{service.guide.intro}</p>

     <ServiceForm<ServiceRequestForm>
      serviceType={service.slug as ServiceRequestForm['serviceType']}
    />
    </section>
  )
  
}