import { HomeIcon, PhoneCallIcon, SquareUserRound } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm text-dark-accent font-semibold">
      <div className='max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-4 items-center justify-between'>
        <div className="flex justify-center items-center gap-2 md:justify-start md:gap-4 w-full">
          <HomeIcon className="hidden md:block md:w-20 md:h-20" />
          <div className='flex flex-col gap-1 items-center md:items-start'>
            <div className='flex gap-2 items-center'>
              <HomeIcon className="w-10 h-10 mb-2 md:hidden" />
                <h1 className="text-3xl font-bold">HomeCareHub</h1>
            </div>
            <p className='text-center'>
              Voice-first assistance requests for independent living.
            </p>
          </div>
        </div>
        <div className='w-fit grid grid-cols-[1fr_3fr] gap-y-2 md:gap-2  text-nowrap text-lg text-right'>
          <SquareUserRound className='w-7 h-7' /><span>ID: 123 456 789</span>
          <PhoneCallIcon className='w-6 h-6' /><span>+00 12 34 56 78</span>
        </div>
      </div>
    </header>
    )
}
