import styles from './goods-skeleton.module.css';
export default function SkeletonGoods() {
  return (
    <div className={styles.skeletonWrapper}>
      <div>
        <div className={styles.yourGoods}>
          <div className={styles.peopleStisctic}>
            <p className={styles.skeleton}></p> {/* Скелетон для числа */}
            <p className={`${styles.skeleton} ${styles.skeletonText}`}></p>{' '}
            {/* Скелетон для текста "с доп. статистикой" */}
          </div>
          <div className={styles.peopleStisctic}>
            <p className={styles.skeleton}></p> {/* Скелетон для цены */}
            <p
              className={`${styles.skeleton} ${styles.skeletonDiscount}`}
            ></p>{' '}
            {/* Скелетон для скидки */}
          </div>
        </div>
      </div>
    </div>
  );
}
