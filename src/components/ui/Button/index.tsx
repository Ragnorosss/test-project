import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button className={`${styles.button} ${className}`} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export { Button };
