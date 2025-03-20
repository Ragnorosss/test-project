test-project/
│
├── node_modules/              # Папка з встановленими залежностями
├── public/                    # Публічні файли (наприклад, зображення, шрифти)
├── src/                       # Джерела коду проекту
|      ├── icons/              # Іконки для проекту
|      ├── layout/             # Компоненти для макету (наприклад, хедери, футери)
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
├── vite.config.ts             # Конфігурація для Vite (сборник)
│
└── Plugins/                   # Плаґіни для проекту (наприклад, vite-plugin-svgr)
      └── vite-plugin-svgr     # Плаґін для роботи з SVG зображеннями
