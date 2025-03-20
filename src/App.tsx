// Імпортуємо необхідні модулі та компоненти
import './App.css';  // Підключення стилів
import { Route, Routes } from 'react-router-dom';  // Імпорт для маршрутизації
import Home from './components/screens/home/Home';  // Головна сторінка
import Login from './components/screens/Login';  // Сторінка входу
import Register from './components/screens/Register';  // Сторінка реєстрації
import RootLayout from './components/layout/RootLayout';  // Основний лейаут
import AuthLayout from './components/layout/AuthLayout';  // Лейаут для аутентифікації
import Orders from './components/screens/Orders';  // Сторінка з замовленнями
import AnimateWrapper from './components/layout/AnimateWrapper';  // Обгортка для анімацій
import Order from './components/screens/order/Order';  // Сторінка окремого замовлення

function App() {
  return (
    // Обгортка для анімацій
    <AnimateWrapper>
      <Routes>
        {/* Лейаут для основних сторінок */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />  {/* Головна сторінка */}
          <Route path="orders" element={<Orders />} />  {/* Сторінка замовлень */}
          <Route path="orders/:id" element={<Order />} />  {/* Сторінка окремого замовлення */}
        </Route>
        {/* Лейаут для сторінок аутентифікації */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />  {/* Сторінка входу */}
          <Route path="register" element={<Register />} />  {/* Сторінка реєстрації */}
        </Route>
      </Routes>
    </AnimateWrapper>
  );
}

export default App; 