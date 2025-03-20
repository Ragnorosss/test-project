// Імпортуємо необхідні модулі для анімацій
import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';  // Для типізації children
import { useLocation } from 'react-router-dom';  // Для отримання поточного шляху

// Компонент для обгортки з анімаціями
function AnimateWrapper({ children }: PropsWithChildren) {
  // Отримуємо поточний шлях з useLocation
  const location = useLocation();

  return (
    // Використовуємо AnimatePresence для анімацій при переходах
    <AnimatePresence mode="wait">
      {/* Мotion.div для анімації під час переходів між сторінками */}
      <motion.div
        key={location.pathname}  // Ключ для анімації, щоб кожна сторінка мала унікальний ключ
        initial={{ opacity: 0, scale: 0.98, x: 10 }}  // Початковий стан анімації
        animate={{ opacity: 1, scale: 1, x: 0 }}  // Стан під час анімації
        exit={{ opacity: 0, scale: 1.02, x: -10 }}  // Стан при виході зі сторінки
        transition={{ duration: 0.3, ease: 'easeOut' }}  // Налаштування тривалості та типу анімації
      >
        {children}  {/* Виводимо дочірні компоненти */}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimateWrapper;  // Експортуємо компонент AnimateWrapper