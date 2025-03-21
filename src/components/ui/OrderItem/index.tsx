import { TOrder } from '../../../type';
import styles from './order.module.css';
export default function OrderItem({
  transactionId,
  status,
  gameID,
  ammount,
  gameName,
  createAt,
}: Omit<TOrder, 'goods'>) {
  return (
    <div className={styles.order}>
      <div className={styles.orderWrapper}>
        <div>
          <p className={styles.titleOrder}>Transaction ID</p>
          <p className={styles.dataOrder}>#{transactionId}</p>
        </div>
        <div>
          <p className={styles.titleOrder}>Date</p>
          <p className={styles.dataOrder}>{createAt}</p>
        </div>
        <div>
          <p className={styles.titleOrder}>Status</p>
          <div className={styles.dataOrder}>
            <span className={styles.dataOrderStatus}></span>
            <span>{status}</span>
          </div>
        </div>
      </div>
      <div className={styles.orderWrapper}>
        <div>
          <p className={styles.titleOrder}>Game Name</p>
          <p className={styles.dataOrder}>{gameName}</p>
        </div>
        <div>
          <p className={styles.titleOrder}>Game ID</p>
          <p className={styles.dataOrder}>{gameID}</p>
        </div>
        <div>
          <p className={styles.titleOrder}>Ammount</p>
          <p className={styles.dataOrder}>${ammount}</p>
        </div>
      </div>
    </div>
  );
}
