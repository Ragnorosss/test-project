# Структура проекту

Проект складається з таких папок і файлів:

```
test-project/
│
├── node_modules/              # Папка з встановленими залежностями
├── public/                    # Публічні файли (наприклад, зображення, шрифти)
├── src/                       # Джерела коду проекту
│  ├── components/             # Головна папка з багаторазовими компонентами
│      ├── icons/              # Експортує SVG-іконки як React-компоненти
│      ├── layout/             # Компоненти для структури сторінок (шапка, футер, бокові панелі)
│      ├── screens/            # Окремі сторінки додатку (наприклад, login, profile, dashboard)
│      ├── ui/                 # Універсальні UI-компоненти (кнопки, інпути, модальні вікна)
│
├── assets/                    # Статичні файли (іконки, зображення, шрифти)
├── data/                      # Статичні/заздалегідь підготовлені дані (наприклад, списки для селектів)
│
├── Dockerfile                 # Файл для налаштування Docker-контейнера
├── docker-compose.yml         # Файл для налаштування Docker Compose
├── pnpm-lock.yaml             # Lock-файл для менеджера пакетів pnpm
├── package.json               # Основний файл із залежностями проекту
├── README.md                  # Документація проекту
├── index.html                 # Основний HTML-файл
├── vercel.json                # Конфігурація для деплою на Vercel
├── eslint.config.js           # Конфігурація для ESLint
├── tsconfig.app.json          # Конфігурація TypeScript для додатка
├── tsconfig.json              # Основна конфігурація TypeScript
├── vite.config.ts             # Конфігурація для Vite

```
# Docker 
docker compose -f docker-compose.yml up або docker compose up

# Плагіни для Vite

    └── vite-plugin-svgr     # Плаґін для роботи з SVG зображеннями

# Скрипти для запуску сервера


```
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
  },
```
