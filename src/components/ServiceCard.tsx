import { Service } from '@/types/service'
import Link from 'next/link'

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block rounded-xl border p-5 hover:bg-gray-50 transition"
    >
      <h2 className="text-lg font-semibold">
        {service.title}
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        {service.description}
      </p>
    </Link>
  )
}
