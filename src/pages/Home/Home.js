import { useState } from 'react';
import styles from './Home.module.scss';
import { HomeFeed } from './components/HomeFeed';
import { HomeGuest } from './components/HomeGuest';

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? <HomeFeed /> : <HomeGuest />;
}

export default Home;
