// -----------------------------
// Общий базовый интерфейс для всех форм
// -----------------------------
export interface BaseRequestForm {
  serviceType: string              // slug сервиса
  comment?: string                 // дополнительная информация
  confirmation: boolean            // подтверждение отправки
}

// -----------------------------
// Запись к врачу
// -----------------------------
export interface MedicalAppointmentForm extends BaseRequestForm {
  serviceType: 'medical-appointment'
  requestCategory: 'checkup' | 'analysis' | 'new-complaint' // основной выбор
}

// -----------------------------
// Транспорт / Сопровождение
// -----------------------------
export interface TransportForm extends BaseRequestForm {
  serviceType: 'transportation-assistance'
  assistanceType: 'transport-only' | 'escort-only' | 'transport-and-escort'
  destinationAddress: string       // конечный адрес
  appointmentDateTime?: Date       // когда нужно быть на месте
  specialTransportRequired?: boolean
}

// -----------------------------
// Помощь по дому
// -----------------------------
export interface HomeMaintenanceForm extends BaseRequestForm {
  serviceType: 'home-maintenance'
  homeTaskType: 'minor-repair' | 'technical-setup' | 'household-help' | 'safety-check' | 'other'
  preferredVisitTime?: 'morning' | 'afternoon' | 'no-preference'
}

// -----------------------------
// Личный уход
// -----------------------------
export interface PersonalCareForm extends BaseRequestForm {
  serviceType: 'personal-care'
  personalCareType: 'haircut' | 'nails' | 'shave' | 'other'
  preferredVisitTime?: 'morning' | 'afternoon' | 'no-preference'
}

// -----------------------------
// Покупка продуктов (разовые / экстра)
// -----------------------------
export interface GroceryForm extends BaseRequestForm {
  serviceType: 'grocery-shopping'
  groceryRequestType: 'missing-items' | 'extra-purchase'
  preferredDeliveryTime?: 'morning' | 'afternoon' | 'no-preference'
}

// -----------------------------
// Доставка лекарств
// -----------------------------
export interface MedicineDeliveryForm extends BaseRequestForm {
  serviceType: 'medicine-delivery'
  prescriptionReference: string   // фиксированный или из системы
  preferredDeliveryTime?: 'morning' | 'afternoon' | 'no-preference'
}

// -----------------------------
// Сообщение социальному работнику
// -----------------------------
export interface MessageForm extends BaseRequestForm {
  serviceType: 'contact-social-worker'
  comment: string                 // основной текст сообщения
}

// -----------------------------
// Универсальный тип для всех форм
// -----------------------------
export type ServiceRequestForm =
  | MedicalAppointmentForm
  | TransportForm
  | HomeMaintenanceForm
  | PersonalCareForm
  | GroceryForm
  | MedicineDeliveryForm
  | MessageForm