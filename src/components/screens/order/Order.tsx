import axios from 'axios';
import { useEffect, useState } from 'react';
import { TOrder } from '../../../type';  // Імпортуємо тип TOrder
import OrderItem from '../../ui/OrderItem';  // Компонент для відображення замовлення
import { Link, useParams } from 'react-router-dom';  // Імпортуємо Link для навігації та useParams для отримання параметра з URL
import { IconExit } from '../../icons/icons';  // Іконка виходу
import styles from './order-page.module.css';  // Стилі для сторінки замовлення
import OrderSkeleton from '../../ui/Skeleton';  // Скелетон для замовлення (показується під час завантаження)
import SkeletonGoods from '../../ui/Skeleton/goods';  // Скелетон для товарів
import GoodsItem from '../../ui/GoodsItem';  // Компонент для відображення товарів

export default function Order() {
  const { id } = useParams<{ id: string }>();  // Отримуємо параметр id з URL

  // Стани для зберігання даних про замовлення, помилки та стану завантаження
  const [orders, setOrders] = useState<TOrder>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Функція для отримання замовлення за допомогою axios
  const getOrder = async () => {
    setLoading(true);  // Встановлюємо стан завантаження в true
    setError(null);  // Очищаємо попередні помилки
    try {
      // Отримуємо дані замовлення з API
      const { data } = await axios.get(
        `https://moc-server.vercel.app/orders/${id}`
      );
      setOrders(data);  // Зберігаємо отримані дані в стейт
    } catch (error) {
      // Обробка помилок
      if (axios.isAxiosError(error)) {
        console.error(error.response);  // Логування помилки API
        setError(error.message);  // Збереження повідомлення про помилку
      } else {
        console.error(error);  // Логування інших помилок
      }
    } finally {
      setLoading(false);  // Завершуємо завантаження
    }
  };

  // Викликаємо функцію getOrder при першому рендері компоненту
  useEffect(() => {
    getOrder();
  }, []);  // Пустий масив означає, що ефект викликається тільки при першому рендері

  // Якщо є помилка, виводимо її
  if (error) {
    return <>{error}</>;
  }

  // Якщо дані ще завантажуються, показуємо скелетони
  if (loading) {
    return (
      <div className={styles.order}>
        <div>
          <Link to={'/orders'} className={styles.back}>
            <IconExit />
            <p>#{orders?.transactionId}</p>  {/* Показуємо ID транзакції */}
          </Link>
        </div>
        <OrderSkeleton />  {/* Скелетон для замовлення */}
        <SkeletonGoods />  {/* Скелетон для товарів */}
      </div>
    );
  }

  // Після завантаження даних виводимо інформацію про замовлення та товари
  return (
    <div className={styles.order}>
      <div>
        <Link to={'/orders'} className={styles.back}>
          <IconExit />
          <p>#{orders?.transactionId}</p>  {/* Показуємо ID транзакції */}
        </Link>
      </div>
      <OrderItem {...(orders as TOrder)} />  {/* Виводимо інформацію про замовлення */}
      <GoodsItem {...(orders as TOrder)} />  {/* Виводимо інформацію про товари в замовленні */}
    </div>
  );
}
