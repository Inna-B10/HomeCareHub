'use client'

import { ServiceRequestForm } from '@/types/serviceForms'
import { useState } from 'react'

type Props<T extends ServiceRequestForm> = {
  serviceType: T['serviceType']
}

export function ServiceForm<T extends ServiceRequestForm>({ serviceType }: Props<T>) {
  const [formState, setFormState] = useState<Partial<T>>({ serviceType } as Partial<T>)

  const handleChange = (field: keyof T, value: unknown) => {
    setFormState(prev => ({ ...prev, [field]: value }))
  }

  const onSubmit=(data: T) => console.log('Submitted', data)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // confirmation флаг ставим перед отправкой
    onSubmit({ ...formState, confirmation: true } as T)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">

      {/* //*------------------------- Сервис-специфичные Поля */}
      {serviceType === 'medical-appointment' && (
        <>
          <label>
            Категория обращения
            <select
              value={(formState as any).requestCategory || ''}
              onChange={e => handleChange('requestCategory' as any, e.target.value)}
            >
              <option value="">Выберите</option>
              <option value="checkup">Плановый осмотр</option>
              <option value="analysis">Сдать анализы</option>
              <option value="new-complaint">Новый приём</option>
            </select>
          </label>
        </>
      )}

      {serviceType === 'transportation-assistance' && (
        <>
          <label>
            Тип услуги
            <select
              value={(formState as any).assistanceType || ''}
              onChange={e => handleChange('assistanceType' as any, e.target.value)}
            >
              <option value="">Выберите</option>
              <option value="transport-only">Только транспорт</option>
              <option value="escort-only">Только сопровождение</option>
              <option value="transport-and-escort">Транспорт и сопровождение</option>
            </select>
          </label>

          <label>
            Куда направляетесь
            <input
              type="text"
              value={(formState as any).destinationAddress || ''}
              onChange={e => handleChange('destinationAddress' as any, e.target.value)}
              placeholder="Адрес"
            />
          </label>

          <label>
            Время визита
            <input
              type="datetime-local"
              value={(formState as any).appointmentDateTime ? new Date((formState as any).appointmentDateTime).toISOString().slice(0,16) : ''}
              onChange={e => handleChange('appointmentDateTime' as any, new Date(e.target.value))}
            />
          </label>

          <label>
            Спец. транспорт нужен?
            <input
              type="checkbox"
              checked={(formState as any).specialTransportRequired || false}
              onChange={e => handleChange('specialTransportRequired' as any, e.target.checked)}
            />
          </label>
        </>
      )}

      {serviceType === 'home-maintenance' && (
        <>
          <label>
            Тип задачи
            <select
              value={(formState as any).homeTaskType || ''}
              onChange={e => handleChange('homeTaskType' as any, e.target.value)}
            >
              <option value="">Выберите</option>
              <option value="minor-repair">Мелкий ремонт</option>
              <option value="technical-setup">Настройка техники</option>
              <option value="household-help">Бытовая помощь</option>
              <option value="safety-check">Проверка безопасности</option>
              <option value="other">Другое</option>
            </select>
          </label>

          <label>
            Предпочтительное время визита
            <select
              value={(formState as any).preferredVisitTime || ''}
              onChange={e => handleChange('preferredVisitTime' as any, e.target.value)}
            >
              <option value="no-preference">Без предпочтений</option>
              <option value="morning">Утро</option>
              <option value="afternoon">День</option>
            </select>
          </label>
        </>
      )}
      {serviceType === 'personal-care' && (
        <>
          <label>
            Тип услуги
            <select
              value={(formState as any).personalCareType || ''}
              onChange={e => handleChange('personalCareType' as any, e.target.value)}
            >
              <option value="">Выберите</option>
              <option value="haircut">Стрижка</option>
              <option value="nails">Маникюр/Педикюр</option>
              <option value="shave">Бритье/Корректировка бороды</option>
              <option value="other">Другое</option>
            </select>
          </label>

          <label>
            Предпочтительное время визита
            <select
              value={(formState as any).preferredVisitTime || ''}
              onChange={e => handleChange('preferredVisitTime' as any, e.target.value)}
            >
              <option value="no-preference">Без предпочтений</option>
              <option value="morning">Утро</option>
              <option value="afternoon">День</option>
              {/* <option value="no-preference">Без предпочтений</option> */}
            </select>
          </label>
        </>
      )}

      {serviceType === 'grocery-shopping' && (
        <>
          <label>
            Тип покупки
            <select
              value={(formState as any).groceryRequestType || ''}
              onChange={e => handleChange('groceryRequestType' as any, e.target.value)}
            >
              <option value="">Выберите</option>
              <option value="missing-items">Недостающие продукты</option>
              <option value="extra-purchase">Дополнительная покупка</option>
            </select>
          </label>

          <label>
            Предпочтительное время доставки
            <select
              value={(formState as any).preferredDeliveryTime || ''}
              onChange={e => handleChange('preferredDeliveryTime' as any, e.target.value)}
            >
              <option value="no-preference">Без предпочтений</option>
              <option value="morning">Утро</option>
              <option value="afternoon">День</option>
            </select>
          </label>
        </>
      )}

      {serviceType === 'medicine-delivery' && (
        <>
          <label>
            Рецепт
            <input
              type="text"
              value={(formState as any).prescriptionReference || ''}
              onChange={e => handleChange('prescriptionReference' as any, e.target.value)}
              placeholder="Название рецепта"
            />
          </label>

          <label>
            Предпочтительное время доставки
            <select
              value={(formState as any).preferredDeliveryTime || ''}
              onChange={e => handleChange('preferredDeliveryTime' as any, e.target.value)}
            >
              <option value="no-preference">Без предпочтений</option>
              <option value="morning">Утро</option>
              <option value="afternoon">День</option>
            </select>
          </label>
        </>
      )}

      {serviceType === 'contact-social-worker' && (
        <label>
          Сообщение
          <textarea
            value={(formState as any).comment || ''}
            onChange={e => handleChange('comment' as any, e.target.value)}
            placeholder="Ваше сообщение"
            rows={4}
          />
        </label>
      )}

      {/* -------------------------- */}
      {/* Общие поля */}
      {/* -------------------------- */}
      <button
        type="submit"
        className="bg-light-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-dark-accent transition"
      >
        Отправить запрос
      </button>
    </form>
  )
}
