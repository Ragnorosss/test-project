import { useState, useEffect } from 'react';
import styles from './toast.module.css';
import { motion } from 'framer-motion';
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Убираем toast через 3 секунды

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <motion.div
      className={`${styles.toast} ${styles[type]}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      {message}
    </motion.div>
  );
};

export default Toast;
