import FormFields from '~/FormValidator/FormFields';
import styles from './Signup.module.scss';
import { FieldInput } from '~/components/FieldInput';
import { Button } from '~/components/Button';

function Signup() {
  return (
    <div className={styles.signupPage}>
      <form className={styles.form}>
        <h3 className={styles.header}>Sign up</h3>
        {FormFields.map((field) => (
          <FieldInput
            key={field.key}
            label={field.label}
            name={field.name}
            type={field.type || 'text'}
            value
            error
            onChange
            placeholder={field.placeholder}
            options={field.options}
          />
        ))}
        <Button type="submit" className={styles.button} primary>
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default Signup;
