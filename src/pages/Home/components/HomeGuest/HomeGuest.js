import ParticlesBg from '~/components/ParticlesBg/ParticlesBg';
import styles from './HomeGuest.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { Login } from '../Login';
import clsx from 'clsx';
import { useAuthUI } from '~/Provider/AuthUIProvider';

function HomeGuest() {
  const { isSignInOpen } = useAuthUI();

  return (
    <div className={clsx(styles.wrapper, { [styles.active]: isSignInOpen })}>
      <ParticlesBg />
      <h1 className={styles.slogan}>
        From Quantum Fields to Cosmic Mind
        <span className={styles.highlight}>All is One</span>
      </h1>
      <Image
        src={images.logo_transparent}
        alt="loginlogo"
        className={styles.logo}
      />
      <Login className={styles.loginForm} />
    </div>
  );
}

export default HomeGuest;
