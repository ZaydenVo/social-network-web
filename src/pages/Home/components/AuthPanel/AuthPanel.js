import { useState } from 'react';
import { Login } from '../Login';
import { Signup } from '../Signup';

function AuthPanel({ className }) {
  const [authMode, setAuthMode] = useState('signin');

  return (
    <div className={className}>
      {authMode === 'signin' ? (
        <Login onSwitchMode={() => setAuthMode('signup')} />
      ) : (
        <Signup onSwitchMode={() => setAuthMode('signin')} />
      )}
    </div>
  );
}

export default AuthPanel;
