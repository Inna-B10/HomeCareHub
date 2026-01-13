import { Service } from '@/types/service'
import Link from 'next/link'

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-left group"
    >
      <div className="flex gap-4">
        <div className="w-18 h-18 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200/80 transition-all">
          <Icon className="w-14 h-14 text-light-accent" />
        </div>
        <div className="flex-1">
          <h2 className="text-[22px] font-semibold text-dark-accent mb-2">{service.title}</h2>
          <p className="text-lg">{service.shortDesc}</p>
        </div>
      </div>
    </Link>
  )
}
