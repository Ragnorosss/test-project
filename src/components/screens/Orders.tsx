import axios from 'axios';
import { useEffect, useState } from 'react';
import { TOrder } from '../../type';
import { Link } from 'react-router-dom';
import OrderItem from '../ui/OrderItem';
import { IconArrLeft } from '../icons/icons';
import OrderSkeleton from '../ui/Skeleton';
export default function Orders() {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getOrder = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.get('https://moc-server.vercel.app/orders').then((data) => {
        setOrders(data.data);
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        console.error(error.response);
        setError(error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);
  if (error) {
    <p>{error}</p>;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '300px',
        margin: '14px auto',
      }}
    >
      <Link
        to={'/'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          fontSize: '20px',
        }}
      >
        <IconArrLeft />
        Orders
      </Link>
      {!loading
        ? orders.map((order) => (
            <div
              style={{
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
                maxWidth: '296px',
              }}
              key={order.id}
            >
              <Link to={`/orders/${order.id}`}>
                <OrderItem {...order} />
              </Link>
            </div>
          ))
        : Array.from({ length: 3 }).map((_, index) => (
            <OrderSkeleton key={index} isLoading={loading} />
          ))}
    </div>
  );
}
