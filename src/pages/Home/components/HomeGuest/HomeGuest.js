import ParticlesBg from '~/components/ParticlesBg/ParticlesBg';
import styles from './HomeGuest.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import clsx from 'clsx';
import { useAuthUI } from '~/Provider/AuthUIProvider';
import AuthPanel from '../AuthPanel/AuthPanel';

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
      <AuthPanel className={styles.authPanel} />
    </div>
  );
}

export default HomeGuest;
