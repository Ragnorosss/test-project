import { Link } from 'react-router-dom';
import { social } from '../../../../data/socials';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './login-form.module.css';
import { useState } from 'react';
import Toast from '../../toast';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    if (!form.email.includes('@')) {
      setError('Введите корректный email');
      return false;
    }
    if (form.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const hardcodedEmail = "example@test.com";
    const hardcodedPassword = "qwerty123";

    if (form.email === hardcodedEmail && form.password === hardcodedPassword) {
      setToast({
        message: 'Успешный вход!',
        type: 'success',
      });
    } else {
      setToast({
        message: 'Ошибка входа. Проверьте данные.',
        type: 'error',
      });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit" className={styles.send}>
          Login
        </Button>

        <div className={styles.socialContainer}>
          <p>Use social media</p>
          <ul className={styles.socailsList}>
            {social.map((social) => (
              <li key={social.id}>{social.iconName}</li>
            ))}
          </ul>
        </div>
        <Link to="/">Forgot password?</Link>
      </form>
    </>
  );
}
