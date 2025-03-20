// Імпортуємо необхідні модулі для форми входу
import { Link } from 'react-router-dom'; // Для навігації між сторінками
import { social } from '../../../../data/socials'; // Соціальні мережі для входу
import { Button } from '../../Button'; // Кнопка для форми
import Input from '../../Input'; // Компонент для вводу
import styles from './login-form.module.css'; // Стилі для форми входу
import { useState } from 'react'; // Для роботи з локальним станом
import axios from 'axios'; // Для виконання HTTP запитів
import Toast from '../../toast'; // Компонент для відображення повідомлень

export default function LoginForm() {
  // Стани для форми, помилок та повідомлень
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // Статус помилки
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null); // Повідомлення (успіх/помилка)

  // Обробник зміни значень у формі
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Очищаємо помилку при зміні значення
  };

  // Перевірка форми на валідність
  const validateForm = () => {
    if (!form.email.includes('@')) {
      // Перевірка email
      setError('Введите корректный email');
      return false;
    }
    if (form.password.length < 6) {
      // Перевірка пароля
      setError('Пароль должен содержать минимум 6 символов');
      return false;
    }
    return true; // Якщо все вірно, повертаємо true
  };

  // Обробник надсилання форми
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Запобігаємо стандартній поведінці форми
    if (!validateForm()) return; // Якщо форма не пройшла перевірку, не відправляємо запит

    try {
      // Виконання запиту на авторизацію
      const response = await axios.post('https://moc-server.vercel.app/login', {
        email: form.email,
        password: form.password,
      });

      if (response.status === 200) {
        // Якщо успішно
        setToast({
          message: 'Успешный вход!',
          type: 'success',
        });
      }
    } catch (err) {
      // Якщо сталася помилка
      setToast({
        message: 'Ошибка входа. Проверьте данные.',
        type: 'error',
      });
    }
  };

  return (
    <>
      {/* Виводимо повідомлення (toast) якщо воно є */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)} // Закриття повідомлення
        />
      )}

      {/* Форма входу */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Поле для введення email */}
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {/* Поле для введення пароля */}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {/* Якщо є помилка, виводимо її */}
        {error && <p className={styles.error}>{error}</p>}
        {/* Кнопка для відправки форми */}
        <Button type="submit" className={styles.send}>
          Login
        </Button>

        {/* Список соціальніх мереж  */}
        <div className={styles.socialContainer}>
          <p>Use social media</p>
          <ul className={styles.socailsList}>
            {/* Перебираємо список соціальних мереж і виводимо їх */}
            {social.map((social) => (
              <li key={social.id}>{social.iconName}</li>
            ))}
          </ul>
        </div>
        {/* Посилання для відновлення пароля */}
        <Link to="/">Forgot password?</Link>
      </form>
    </>
  );
}
