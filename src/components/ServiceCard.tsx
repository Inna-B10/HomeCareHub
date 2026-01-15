import { Service } from '@/types/service'
import Link from 'next/link'

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  const Icon = service.icon;
  const titleId = `service-${service.slug}-title`

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-labelledby={titleId}
      aria-describedby={`${titleId}-desc`}
      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-left group focus-visible:outline-2
        focus-visible:outline-light-accent focus-visible:outline-offset-4"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        {/* //#---------------------------- Top row on mobile / left column on desktop */}
        <div className="flex items-center gap-4 md:items-start">
          <div
            className="min-w-12 w-12 h-12 md:min-w-18 md:w-18 md:h-18
                      bg-blue-100 rounded-lg flex items-center justify-center
                      group-hover:bg-blue-200/80 transition-all"
            aria-hidden="true"
          >
            <Icon className="w-8 h-8 md:w-14 md:h-14 text-light-accent" />
          </div>

          {/* //#---------------------------- Visual title for mobile */}
          <span
            aria-hidden="true"
            className="text-[22px] font-semibold text-dark-accent md:hidden"
          >
            {service.title}
          </span>
        </div>

        {/* //#---------------------------- Content column */}
        <div className="flex flex-col gap-2">
          {/* //#---------------------------- Semantic title (single source of truth) */}
          <h2 id={titleId} className="hidden md:block text-[22px] font-semibold text-dark-accent">
            {service.title}
          </h2>

          <p id={`${titleId}-desc`} className="text-lg">{service.shortDesc}</p>
        </div>
      </div>
    </Link>
  )
}
