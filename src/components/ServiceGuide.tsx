import { Service } from '@/types/service'

type Props = {
  service: Service
}

export function ServiceGuide({ service }: Props) {
  return (
    <article className="space-y-4">
      {service.guide?.intro && (
        <p className="text-lg">{service.guide.intro}</p>
      )}

      {service.guide?.steps?.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Как это работает</h3>
          <ol className="list-decimal list-outside space-y-1 pl-4">
            {service.guide.steps.map((step:string, i:number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {service.guide?.notes && service.guide.notes.length > 0 && (
        <div className="bg-light-coffee/40 pl-10 md:pt-4 rounded-lg">
          <h4 className="font-semibold mb-1">Важно знать</h4>
          <ul className="list-disc list-outside space-y-1">
            {service.guide.notes.map((note:string, i:number) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
