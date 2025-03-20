import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return <input className={`${styles.input} ${className || ''}`} {...props} />;
}
