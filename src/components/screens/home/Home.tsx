import { Link } from 'react-router-dom';
import styles from './home.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.link} to={'register'}>
        Registration
      </Link>
      <Link className={styles.link} to={'login'}>
        Login
      </Link>
      <Link className={styles.link} to={'orders'}>
        Orders
      </Link>
    </main>
  );
}
