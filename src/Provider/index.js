import AuthUIProvider from './AuthUIProvider';
import { ThemeProvider } from './ThemeProvider';
import { UserInfoProvider } from './UserInfoProvider';

function AppProvider({ children }) {
  return (
    <UserInfoProvider>
      <ThemeProvider>
        <AuthUIProvider>{children}</AuthUIProvider>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default AppProvider;
