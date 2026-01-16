# Project name: HomeCareHub

### Project Goal/Description

<!-- [<img src="preview.png" height="250" align="right" style="margin-left:20px" />](preview.png) -->

HomeCareHub is a voice-first web application designed for elderly users and people with limited mobility.   
The main focus is accessibility and hands-free interaction, implemented using Web Speech API and a multi-step voice-controlled form flow.

Voice recognition is initialized on explicit user interaction within the UI, following browser security constraints.


### 🧩 Tech Stack/Built With

![Next.js](https://img.shields.io/badge/Next.js_15.0.0-424242?logo=nextdotjs)
![React](https://img.shields.io/badge/React_19.0.0-424242?logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_4.0.0-424242?logo=tailwindcss)

<!-- end:tech-stack -->

#### **🛠️ Tools & Others**

![ESLint](https://img.shields.io/badge/ESLint_9.14.0-424242?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier_3.3.3-424242?logo=prettier)

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">🗃 Dependencies</h4></summary>

```bash
npm install lucide-react
```
</details>

### 📋 TODOs:

- [ ] change font (semibold)
- [ ] 404-page
- [ ] компонент кнопки
- [ ] footer?
- [ ] **Header**:
  - [ ] семантика
  - [ ] подключить номер?
  - [ ] получить ID пользователя
- [ ] **Homepage**:
  - [ ] кнопка Помощь - функция+семантика
  - [ ] кнопка Микрофон - функция+семантика+визуал
- [ ] **/services/[slug]**:
  - [ ] описание
  - [ ] steps + notes
  - [ ] кнопка Заказать услугу - функция+семантика
- [ ] **/services/[slug]/?step=form**
  - [ ] отображение данных/формы
  - [ ] получение/вставка данных пользователя
  - [ ] визуал + семантика формы
  - [ ] кнопка Отправить запрос - функция+семантика
- [ ] **подключение voice** 



<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">✅ Done</h4></summary>

- [x] list of services
- [x] services type
- [x] ServiceCard
- **Header**:
  - [x] визуал
  - [x] ссылка на главную
- **Homepage**:
  - [x] блок инфо
  - [x] кнопка Помощь (визуал без логики)
  - [x] карточки - семантика
- **/services/[slug]**:
  - [x] Server Component
  - [x] получение slug
  - [x] кнопка Заказать услугу (визуал без логики)
- **/services/[slug]/?step=form**
  - [x] кнопка Отправить запрос - функция+семантика
</details>
