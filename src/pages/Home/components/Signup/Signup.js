import FormFields from '~/FormValidator/FormFields';
import styles from './Signup.module.scss';
import { FieldInput } from '~/components/FieldInput';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

function Signup({ onSwitchMode }) {
  return (
    <div>
      <form className={styles.form}>
        <h3 className={styles.header}>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className={styles.backBtn}
            onClick={onSwitchMode}
          />
          Sign up
        </h3>
        <div className={styles.fieldWrapper}>
          {FormFields.map((field) => (
            <FieldInput
              key={field.key}
              label={field.label}
              name={field.name}
              type={field.type || 'text'}
              // value
              error
              //onChange
              placeholder={field.placeholder}
              options={field.options}
            />
          ))}
        </div>
        <Button type="submit" className={styles.button} primary>
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default Signup;
