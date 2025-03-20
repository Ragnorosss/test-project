import { Outlet } from 'react-router-dom';  // Імпортуємо Outlet для виведення дочірніх компонентів
import Header from '../ui/Header';  // Компонент для хедеру

export default function RootLayout() {
  return (
    <>
      <Header />  {/* Виводимо хедер на кожній сторінці */}
      <Outlet />  {/* Виводимо дочірні компоненти, в залежності від маршруту */}
    </>
  );
}  