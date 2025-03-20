import axios from 'axios'; // Бібліотека для HTTP-запитів
import { social } from '../../../../data/socials'; // Масив соціальних мереж
import { Button } from '../../Button'; // Кнопка
import Input from '../../Input'; // Поля вводу
import styles from './registr.module.css'; // CSS-модулі для стилізації
import { useState } from 'react'; // Використання стану React

// Функціональний компонент форми реєстрації
export default function RegistrationForm() {
  // Стан для полів форми
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [error, setError] = useState(''); // Стан для повідомлення про помилки

  // Функція зміни значень у полях форми
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Скидаємо повідомлення про помилку при введенні нового значення
  };

  // Функція перевірки введених даних
  const validateForm = () => {
    if (!form.email.includes('@')) { // Перевірка коректності email
      setError('Введите корректный email');
      return false;
    }
    if (form.password.length < 6) { // Перевірка довжини пароля
      setError('Пароль должен содержать минимум 6 символов');
      return false;
    }
    if (form.password !== form.repeatPassword) { // Перевірка збігу паролів
      setError('Пароли не совпадают');
      return false;
    }
    return true; // Якщо всі перевірки пройдені, повертаємо true
  };

  // Функція обробки відправки форми
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Забороняємо стандартне оновлення сторінки
    if (!validateForm()) return; // Якщо форма не валідна, виходимо

    try {
      // Відправка POST-запиту на сервер
      const response = await axios.post(
        'https://moc-server.vercel.app/register',
        form
      );
      console.log('Успешная регистрация:', response.data); // Виведення відповіді в консоль
    } catch (err) {
      setError('Ошибка регистрации. Попробуйте позже.'); // Відображення помилки, якщо запит не вдався
    }
  };

  return (
    // Форма реєстрації
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
      {/* Поле для повторного введення пароля */}
      <Input
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password"
        value={form.repeatPassword}
        onChange={handleChange}
      />
      {/* Відображення повідомлення про помилку */}
      {error && <p>{error}</p>}

      {/* Чекбокс з описом */}
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

      {/* Кнопка для відправки форми */}
      <Button type="submit" className={styles.send}>
        Registration
      </Button>

      {/* Блок з кнопками для реєстрації через соцмережі */}
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
