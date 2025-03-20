import { social } from '../../../../data/socials';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './registr.module.css';
export default function RegistrationForm() {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email or Mobile" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="RepeatPassword" />
      <div
        style={{
          display: 'flex',
          margin: '24px 0',
          marginRight: 'auto',
        }}
      >
        <Input
          type="checkbox"
          style={{
            width: '24px',
            marginRight: '8px',
          }}
        />
        <p>Use social media</p>
      </div>
      <Button type="submit" className={styles.send}>
        Registration
      </Button>
      <div className={styles.socialContainer}>
        <p>Use social media</p>
        <ul className={styles.socailsList}>
          {social.map((social) => (
            <li key={social.id}>{social.iconName}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}
