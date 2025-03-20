import styles from './order-skeleton.module.css';

export default function OrderSkeleton({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className={styles.order}>
      <div className={styles.orderWrapper}>
        <div>
          <p className={styles.titleOrder}>Transaction ID</p>
          <p className={styles.skeleton}></p>
        </div>
        <div>
          <p className={styles.titleOrder}>Date</p>
          <p className={styles.skeleton}></p>
        </div>
        <div>
          <p className={styles.titleOrder}>Status</p>
          <p className={styles.skeleton}></p>
        </div>
      </div>
      <div className={styles.orderWrapper}>
        <div>
          <p className={styles.titleOrder}>Game Name</p>
          <p className={styles.skeleton}></p>
        </div>
        <div>
          <p className={styles.titleOrder}>Game ID</p>
          <p className={styles.skeleton}></p>
        </div>
        <div>
          <p className={styles.titleOrder}>Ammount</p>
          <p className={styles.skeleton}></p>
        </div>
      </div>
    </div>
  );
}
