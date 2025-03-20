// Імпортуємо необхідні модулі з React і React Router
import { BrowserRouter } from 'react-router-dom'; // Для маршрутизації
import { StrictMode } from 'react'; // Для строгого режиму, який допомагає виявляти проблеми
import { createRoot } from 'react-dom/client'; // Для рендерингу React компонента в DOM
import './index.css'; // Підключення стилів
import App from './App.tsx'; // Імпорт основного компонента додатку

// Створюємо кореневий елемент для React
createRoot(document.getElementById('root')!).render(
  // Обгортаємо додаток у BrowserRouter для маршрутизації
  <BrowserRouter>
    {/* Обгортаємо в StrictMode для більш суворої перевірки на наявність помилок */}
    <StrictMode>
      {/* Рендеримо головний компонент додатку */}
      <App />
    </StrictMode>
  </BrowserRouter>
);
