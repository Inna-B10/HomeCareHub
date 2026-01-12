import { Service } from '@/types/service'

export const services: Service[] = [
{
  id: 'transport',
    title: 'Transportation Assistance',
    description: 'Help getting to medical appointments or essential locations.',
    slug: 'transportation-assistance',
},
{
    id: 'home-maintenance',
    title: 'Home Maintenance',
    description: 'Technical help with appliances or small home issues.',
    slug: 'home-maintenance',
  },
  {
    id: 'personal-care',
    title: 'Personal Care',
    description: 'Book personal services like a haircut or grooming.',
    slug: 'personal-care',
  },
  {
    id: 'groceries',
    title: 'Grocery Shopping',
    description: 'Request help with grocery shopping or delivery.',
    slug: 'grocery-shopping',
  },
  {
    id: 'social-visit',
    title: 'Social Visit',
    description: 'Schedule an additional visit from a social worker.',
    slug: 'social-visit',
  },

]