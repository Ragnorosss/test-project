import axios from 'axios';
import { useEffect, useState } from 'react';
import { TOrder } from '../../../type';
import OrderItem from '../../ui/OrderItem';
import { Link, useParams } from 'react-router-dom';
import { IconExit } from '../../icons/icons';
import styles from './order-page.module.css';
import { Button } from '../../ui/Button';
import OrderSkeleton from '../../ui/Skeleton';
import SkeletonGoods from '../../ui/Skeleton/goods';
export default function Order() {
  const { id } = useParams<{ id: string }>();

  const [orders, setOrders] = useState<TOrder>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getOrder = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios
        .get(`https://moc-server.vercel.app/orders/${id}`)
        .then((data) => {
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
    return <>{error}</>;
  }
  return (
    <div className={styles.order}>
      <div>
        <Link to={'/orders'} className={styles.back}>
          <IconExit />
          <p>#{orders?.transactionId}</p>
        </Link>
      </div>
      {loading ? <OrderSkeleton /> : <OrderItem {...(orders as TOrder)} />}
      {loading ? (
        <SkeletonGoods />
      ) : (
        <>
          <div>
            <div className={styles.titleContainer}>
              <span>Your Goods: </span>{' '}
              <p className={styles.title}>1 - {orders?.goods?.price}</p>
            </div>
            <div className={styles.yourGoods}>
              <div className={styles.peopleStisctic}>
                <p>{orders?.goods?.people}</p>
                <p className={styles.newPeople}>+1,500</p>
              </div>
              <div className={styles.peopleStisctic}>
                <p>{orders?.goods?.price}</p>
                <p className={styles.discounted}>{orders?.goods?.discount}</p>
              </div>
            </div>
          </div>
          <Button className={styles.ask}>Ask ?</Button>
        </>
      )}
    </div>
  );
}
