import { useContext } from 'react';
import { HomeFeed } from './components/HomeFeed';
import { HomeGuest } from './components/HomeGuest';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import { HeaderOnly } from '~/layouts/components/HeaderOnly';
import { UserInfoContext } from '~/Provider/UserInfoProvider';

function Home() {
  const { isLogin } = useContext(UserInfoContext);
  return isLogin ? (
    <DefaultLayout>
      <HomeFeed />
    </DefaultLayout>
  ) : (
    <HeaderOnly>
      <HomeGuest />
    </HeaderOnly>
  );
}

export default Home;
