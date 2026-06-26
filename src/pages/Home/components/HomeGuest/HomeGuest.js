import ParticlesBg from '~/components/ParticlesBg/ParticlesBg';
import styles from './HomeGuest.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import clsx from 'clsx';
import { useAuthUI } from '~/Provider/AuthUIProvider';
import AuthPanel from '../AuthPanel/AuthPanel';
import { useEffect, useRef } from 'react';

function HomeGuest() {
  const { isSignInOpen, setIsSignInOpen } = useAuthUI();
  const feedRef = useRef(null);

  const handleScrollToFeed = () => {
    feedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollTop = window.scrollY;

      if (scrollTop <= 10) {
        window.isAutoScrollingUp = false;
      }

      if (scrollTop > 400 && isSignInOpen && !window.isAutoScrollingUp) {
        setIsSignInOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isSignInOpen, setIsSignInOpen]);

  return (
    <div className={clsx(styles.wrapper, { [styles.active]: isSignInOpen })}>
      <section className={styles.welcomeSection}>
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

        <div className={styles.scrollIndicator}>
          <span className={styles.arrow} onClick={handleScrollToFeed}>
            ↓
          </span>
          <p className={styles.scrollText}>Scroll down to explore!</p>
        </div>
      </section>

      <section className={styles.feedSection} ref={feedRef}>
        <h2 className={styles.feedTitle}>Khám phá Vũ Trụ Tri Thức</h2>
      </section>
    </div>
  );
}

export default HomeGuest;
