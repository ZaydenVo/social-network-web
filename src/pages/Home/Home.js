import { useContext } from 'react';
import { AuthPanel } from './components/AuthPanel';
import { UserInfoContext } from '~/Provider/UserInfoProvider';
import { HomeLayout } from '~/pages/Home/HomeLayout';
import { useAuthUI } from '~/Provider/AuthUIProvider';

function Home() {
  const { isLogin } = useContext(UserInfoContext);
  const { isSignInOpen } = useAuthUI();
  return (
    <HomeLayout active={!isLogin && isSignInOpen}>
      {!isLogin ? <AuthPanel /> : null}
    </HomeLayout>
  );
}

export default Home;
