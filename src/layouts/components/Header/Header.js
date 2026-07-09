import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { Search } from '../Search';
import { Button } from '~/components/Button';
import { useAuthUI } from '~/Provider/AuthUIProvider';
import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { UserInfoContext } from '~/Provider/UserInfoProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { Menu } from '~/layouts/components/Menu';
import { getMenuItems } from './menuItems.data';
import { Message } from '../Message';
import { useTheme } from '~/Provider/ThemeProvider';
import { Notification } from '../Notification';

function Header() {
  const { isSignInOpen, setIsSignInOpen } = useAuthUI();
  const { isLightMode } = useTheme();
  const { isLogin, userInfo, setUserInfo } = useContext(UserInfoContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const getAvatar = () => {
    return (
      <Image
        src={userInfo?.avatar}
        alt="User avatar"
        className={styles.avatar}
      />
    );
  };

  const menuItems = getMenuItems(userInfo, setUserInfo);

  useEffect(() => {
    const handleColorChange = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleColorChange);

    return () => {
      window.removeEventListener('scroll', handleColorChange);
    };
  }, []);

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenForm = () => {
    const scrollTop = window.scrollY;
    const isUnderFeed = scrollTop > 400;

    if (isUnderFeed) {
      window.isAutoScrollingUp = true;

      setIsSignInOpen(true);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setIsSignInOpen(!isSignInOpen);
    }
  };

  return (
    <header className={clsx(styles.wrapper, { [styles.active]: isScrolled })}>
      <div className={styles.inner}>
        <div className={styles.leftBlock}>
          <Link
            to="/"
            className={styles.logo_wrapper}
            onClick={handleClickLogo}
          >
            <Image src={images.logo_z} alt="logo_z" />
          </Link>
        </div>

        <div className={styles.centerBlock}>
          <Search />
        </div>

        <div className={styles.rightBlock}>
          {isLogin ? (
            <div>
              <Button
                primary
                circle
                onClick={() => {
                  navigate('/create');
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>

              <Message isLightMode={isLightMode} />

              <Notification isLightMode={isLightMode} />

              <Menu children={getAvatar()} menuItems={menuItems} />
            </div>
          ) : (
            <Button primary onClick={handleOpenForm}>
              Sign in
            </Button>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
