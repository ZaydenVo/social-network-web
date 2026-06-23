import FormFields from '~/FormValidator/FormFields';
import styles from './Signup.module.scss';
import { FieldInput } from '~/components/FieldInput';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { validate } from '~/FormValidator';
import { useFormCustom } from '~/hooks';

function Signup({ onSwitchMode }) {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    city: '',
  };

  const handleSignup = () => {};

  const { values, errors, handleChange, handleSubmit } = useFormCustom(
    initialValues,
    validate,
    handleSignup,
  );

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
              value={values[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
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
