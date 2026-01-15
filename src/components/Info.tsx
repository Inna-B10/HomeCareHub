import { InfoIcon, Volume2Icon } from 'lucide-react'

export function Info() {
  return(
    <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between text-lg mb-8 bg-white p-4 rounded-lg shadow'>
      <div className='flex gap-2 items-center'>
        <InfoIcon className='hidden md:inline-flex align-bottom mr-2 text-white w-16 h-16 lg:w-12 lg:h-12 fill-light-accent' />
        <p className="text-center md:text-left">
          <InfoIcon className='md:hidden inline-flex align-bottom mr-2 text-white w-8 h-8 fill-light-accent' /> Выберите нужную услугу. Вы можете нажать на карточку или использовать голосовое управление.
        </p>
      </div>
      <button
      // onClick={() => }
      className="w-fit flex items-center gap-2 px-4 py-2 bg-light-accent rounded-lg hover:bg-dark-accent transition"
    >
      <Volume2Icon className="w-5 h-5 text-white" />
      <span className="text-white font-medium">Помощь</span>
    </button>
  </div>
  )
}
