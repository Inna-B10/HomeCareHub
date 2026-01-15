import { Info } from '@/components/Info'
import { ServiceCard } from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function Home() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Info />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>
  )
}