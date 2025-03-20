import { Link } from 'react-router-dom';
import styles from './tabs.module.css';
import { IconExit } from '../../icons/icons';

interface TabsProps {
  trigger: string;
}

export default function Tabs({ trigger }: TabsProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        margin: '24px auto',
      }}
    >
      <div className={styles.tabs}>
        <Link
          className={`${styles.tabsLink} ${
            trigger === '/login' ? styles.active : ''
          }`}
          to="login"
        >
          Login
        </Link>
        <Link
          className={`${styles.tabsLink} ${
            trigger === '/register' ? styles.active : ''
          }`}
          to="register"
        >
          Registration
        </Link>
      </div>
      <Link className={`${styles.tabsLink} ${styles.close} `} to="/">
        <IconExit />
      </Link>
    </div>
  );
}
