import { createContext, useContext, useState } from 'react';

const AuthUIContext = createContext();

function AuthUIProvider({ children }) {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <AuthUIContext.Provider value={{ isSignInOpen, setIsSignInOpen }}>
      {children}
    </AuthUIContext.Provider>
  );
}

export default AuthUIProvider;
export const useAuthUI = () => useContext(AuthUIContext);
