import { ServiceCard } from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">
          HomeCareHub
        </h1>

        <p className="mt-2 text-gray-600">
          Voice-first assistance requests for independent living.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </section>
    </main>
  )
}