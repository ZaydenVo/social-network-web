import { Button } from '~/components/Button';
import styles from './Login.module.scss';
import clsx from 'clsx';

function Login({ className, onSwitchMode }) {
  return (
    <div className={clsx(styles.loginForm, className)}>
      <form className={styles.form}>
        <h3 className={styles.header}>Sign in</h3>
        <div className={styles.field}>
          <label className={styles.fieldTitle}>Username</label>
          <input
            name="username"
            className={styles.input}
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.fieldTitle}>Password</label>
          <input
            name="password"
            className={styles.input}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className={styles.button}>
          <Button type="submit" className={styles.button1} primary>
            Login
          </Button>
          <Button className={styles.button2} onClick={onSwitchMode} outline>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
