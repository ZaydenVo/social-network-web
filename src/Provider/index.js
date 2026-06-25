import AuthUIProvider from './AuthUIProvider';
import { UserInfoProvider } from './UserInfoProvider';

function AppProvider({ children }) {
  return (
    <UserInfoProvider>
      <AuthUIProvider>{children}</AuthUIProvider>
    </UserInfoProvider>
  );
}

export default AppProvider;
