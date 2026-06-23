import { Button } from '~/components/Button';
import styles from './Login.module.scss';
import clsx from 'clsx';
import { useFormCustom } from '~/hooks';

function Login({ className, onSwitchMode }) {
  const initialValues = {
    username: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username is required!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    }

    return errors;
  };

  const handleLogin = () => {};

  const { values, errors, handleChange, handleSubmit } = useFormCustom(
    initialValues,
    validate,
    handleLogin,
  );

  return (
    <div className={clsx(styles.loginForm, className)}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.header}>Sign in</h3>
        <div className={styles.field}>
          <label className={styles.fieldTitle}>Username</label>
          <input
            name="username"
            value={values.username}
            className={styles.input}
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
          />
          {!!errors.username && (
            <span className={styles.formMessage}>{errors.username}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.fieldTitle}>Password</label>
          <input
            name="password"
            value={values.password}
            className={styles.input}
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          {!!errors.password && (
            <span className={styles.formMessage}>{errors.password}</span>
          )}
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
