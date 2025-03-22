import styles from './goods.module.css';
import { TOrder } from '../../../type';
import { Button } from '../Button';
export default function GoodsItem({ goods }: Pick<TOrder, 'goods'>) {
  return (
    <div>
      <div>
        <div className={styles.titleContainer}>
          <span>Your Goods: </span>{' '}
          <p className={styles.title}>1 - {goods?.price}</p>
        </div>
        <div className={styles.yourGoods}>
          <div className={styles.peopleStisctic}>
            <p>{goods?.people}</p>
            <p className={styles.newPeople}>+1,500</p>
          </div>
          <div className={styles.peopleStisctic}>
            <p>{goods?.price}</p>
            <p className={styles.discounted}>{goods?.discount}</p>
          </div>
        </div>
      </div>
      <Button className={styles.ask}>Ask ?</Button>
    </div>
  );
}
