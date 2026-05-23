import ParticlesBg from '~/components/ParticlesBg/ParticlesBg';
import styles from './HomeGuest.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';

function HomeGuest() {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}

export default HomeGuest;
