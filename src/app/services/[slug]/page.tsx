import { ServiceGuide } from '@/components/ServiceGuide'
import { services } from '@/data/services'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type ServiceProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({params}:ServiceProps) {
  const {slug} = await params

  const service = services.find(s => s.slug===slug)

  if(!service) notFound()

  return(
    <section className="max-w-6xl mx-auto my-8 text-balance">
        <div className='bg-white rounded-lg shadow-md p-6 md:px-6 md:py-8 space-y-6'>
          <div className='w-full flex md:justify-between items-center gap-4 border-b-2 border-light-accent pb-4'>
            <div className='w-full flex justify-center items-end text-light-accent md:justify-start'>
              <span className='w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg p-2 mr-4'><service.icon className='w-6 h-6 md:w-8 md:h-8' /></span>
              <h2 className='text-2xl md:text-3xl font-bold'>{service.title}</h2>
            </div>
            <Link type='button' href={`/services/${service.slug}/order`} title='Заказать услугу' aria-label='Заказать услугу' className="hidden md:inline-block bg-light-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-accent transition text-nowrap">Заказать услугу</Link>
          </div>
          <ServiceGuide service={service} />
        </div>

      <Link type='button' href={`/services/${service.slug}/order`} title='Заказать услугу' aria-label='Заказать услугу' className="block md:hidden w-fit mx-auto my-8 px-6 py-3 rounded-lg bg-light-accent text-white font-semibold hover:bg-dark-accent transition">Заказать услугу</Link>
    </section>
  )
}