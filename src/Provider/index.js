import AuthUIProvider from './AuthUIProvider';

function AppProvider({ children }) {
  return <AuthUIProvider>{children}</AuthUIProvider>;
}

export default AppProvider;
