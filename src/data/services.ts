import { Service } from '@/types/service'
import { Car, MessageSquareText, Pill, Scissors, ShoppingCart, Stethoscope, Wrench } from 'lucide-react'

export const services: Service[] = [
  {
    id: 'accompany',
    icon: Stethoscope,
    title: 'Сопровождение',
    shortDesc: 'Помощь в поездке на медицинский прием',
    slug: 'accompany-to-doctor',
    
  },
  {
    id: 'transportation',
    icon: Car,
    title: "Заказ транспорта",
    shortDesc: "Помощь в организации поездки и транспорта",
    slug: 'transportation-assistance',
  },
  {
    id: 'home-maintenance',
    icon: Wrench,
    title: 'Помощь по дому',
    shortDesc: 'Техническая помощь и мелкий ремонт',
    slug: 'home-maintenance',
  },
  {
    id: 'personal-care',
    icon: Scissors,
    title: 'Личный уход',
    shortDesc: 'Запись на стрижку или другие услуги по уходу',
    slug: 'personal-care',
  },
  {
    id: 'groceries',
    icon: ShoppingCart,
    title: 'Покупка продуктов',
    shortDesc: 'Помощь с покупкой или доставкой продуктов',
    slug: 'grocery-shopping',
  },
    {
    id: 'medicines',
    icon: Pill,
    title: "Доставка лекарств",
    shortDesc: "Получение препаратов из аптеки",
    slug:'medicines',
  },
  {
    id: 'message',
    icon: MessageSquareText,
    title: 'Сообщение',
    shortDesc: 'Оставить сообщение для социального работника',
    slug: 'message',
  },
]
