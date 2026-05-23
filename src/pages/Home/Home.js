import { useState } from 'react';
import styles from './Home.module.scss';
import { HomeFeed } from './components/HomeFeed';
import { HomeGuest } from './components/HomeGuest';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import { HeaderOnly } from '~/layouts/components/HeaderOnly';

function Home() {
  const [isLogin, setIsLogin] = useState(false);
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
