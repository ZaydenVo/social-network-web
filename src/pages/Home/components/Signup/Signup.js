import FormFields from '~/FormValidator/FormFields';
import styles from './Signup.module.scss';
import { FieldInput } from '~/components/FieldInput';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { validate } from '~/FormValidator';
import { useFormCustom } from '~/hooks';
import httpRequest from '~/utils/httpRequest';

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

  const handleSignup = async () => {
    try {
      const response = await httpRequest.post('identity/users/registration', {
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        dob: values.dob,
        email: values.email,
        city: values.city,
      });

      if (response.status === 200 || response.status === 201) {
        alert('Register successful! Please log in!');
        onSwitchMode();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || 'Please try again!';
        alert(errorMessage);
      } else {
        alert('Please try again later!');
      }
    }
  };

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
              key={field.name}
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
