import styles from './AuthPanel.module.scss';
import { useAuthUI } from '~/Provider/AuthUIProvider';
import clsx from 'clsx';
import { useState } from 'react';
import { Login } from '../Login';
import { Signup } from '../Signup';

function AuthPanel() {
  const { isSignInOpen } = useAuthUI();
  const [authMode, setAuthMode] = useState('signin');

  return (
    <div
      className={clsx(styles.authWrapper, { [styles.active]: isSignInOpen })}
    >
      <div className={styles.authPanel}>
        {authMode === 'signin' ? (
          <Login onSwitchMode={() => setAuthMode('signup')} />
        ) : (
          <Signup onSwitchMode={() => setAuthMode('signin')} />
        )}
      </div>
    </div>
  );
}

export default AuthPanel;
