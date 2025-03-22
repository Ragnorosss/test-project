# Структура проекту

Проект складається з таких папок і файлів:

```
 test-project/
│
├── node_modules/              # Папка з встановленими залежностями
├── public/                    # Публічні файли (наприклад, зображення, шрифти)
├── src/                       # Джерела коду проекту
|      ├── icons/              # Іконки для проекту
|      ├── layout/             # Компоненти для макету 
|      ├── screens/            # Екранні компоненти (сторінки)
|      ├── ui/                 # UI-компоненти (кнопки, форми і т.д.)
|      ├── data/               # Статичні/заздалегідь підготовлені дані
| 
│
├── Dockerfile                 # Файл для налаштування Docker контейнера
├── docker-compose.yml         # Файл для налаштування Docker Compose
├── pnpm-lock.yaml             # Lock файл для менеджера пакетів pnpm
├── package.json               # Основний файл із залежностями проекту
├── README.md                  # Документація проекту
├── index.html                 # Основний HTML файл
├── vercel.json                # Конфігурація для деплою на Vercel
├── eslint.config.js           # Конфігурація для ESLint
├── tsconfig.app.json          # Конфігурація TypeScript для додатка
├── tsconfig.json              # Основна конфігурація TypeScript
├── vite.config.ts             # Конфігурація для Vite
```
#Docker 
docker compose -f docker.compose.yml up або docker compose up

#Плагіни

    └── vite-plugin-svgr     # Плаґін для роботи з SVG зображеннями

# Скрипты для підняття сервера 
```
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
  },
```