
// Лейаут для аутентифікації
import { Outlet, useLocation } from 'react-router-dom';  // Імпортуємо необхідні модулі для маршрутизації
import Tabs from '../ui/Tabs';  // Компонент для вкладок

export default function AuthLayout() {
  // Отримуємо поточний шлях для оновлення вкладок
  const location = useLocation();

  return (
    <div className={'authContainer'}>
      {/* Виводимо вкладки, вказуючи поточний шлях для їх активації */}
      <Tabs trigger={`${location.pathname}`} />
      {/* Виводимо дочірні компоненти */}
      <Outlet />
    </div>
  );
}  