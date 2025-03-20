import axios from 'axios';
import { social } from '../../../../data/socials';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './registr.module.css';
import { useState } from 'react';
export default function RegistrationForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');

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
    if (form.password !== form.repeatPassword) {
      setError('Пароли не совпадают');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:3000/register', form);
      console.log('Успешная регистрация:', response.data);
    } catch (err) {
      setError('Ошибка регистрации. Попробуйте позже.');
    }
  };
  return (
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
      <Input
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password"
        value={form.repeatPassword}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <div
        style={{
          display: 'flex',
          margin: '24px 0',
          marginRight: 'auto',
        }}
      >
        <Input
          type="checkbox"
          style={{
            width: '24px',
            marginRight: '8px',
          }}
        />
        <p>Use social media</p>
      </div>
      <Button type="submit" className={styles.send}>
        Registration
      </Button>
      <div className={styles.socialContainer}>
        <p>Use social media</p>
        <ul className={styles.socailsList}>
          {social.map((social) => (
            <li key={social.id}>{social.iconName}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}
