import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { Search } from '~/components/Search';
import { Button } from '~/components/Button';
import { useAuthUI } from '~/Provider/AuthUIProvider';

function Header() {
  const { isSignInOpen, setIsSignInOpen } = useAuthUI();

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.leftBlock}>
          <Link to="/" className={styles.logo_wrapper}>
            <Image src={images.logo_z} alt="logo_z" />
          </Link>
        </div>

        <div className={styles.centerBlock}>
          <Search />
        </div>

        <div className={styles.rightBlock}>
          <Button primary onClick={() => setIsSignInOpen(!isSignInOpen)}>
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
