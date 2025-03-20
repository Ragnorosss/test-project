import { Link } from 'react-router-dom';
import { social } from '../../../../data/socials';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './login-form.module.css';
export default function LoginForm() {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" className={styles.send}>
        Login
      </Button>
      <div className={styles.socialContainer}>
        <p>Use social media</p>
        <ul className={styles.socailsList}>
          {social.map((social) => (
            <li key={social.id}>{social.iconName}</li>
          ))}
        </ul>
      </div>
      <Link to="/">Forgot password ?</Link>
    </form>
  );
}
