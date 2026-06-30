import ParticlesBg from '~/components/ParticlesBg/ParticlesBg';
import styles from './HomeLayout.module.scss';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useTheme } from '~/Provider/ThemeProvider';
import { Link } from 'react-router-dom';

function HomeLayout({ children, active = false }) {
  const feedRef = useRef(null);
  const { isLightMode, setIsLightMode } = useTheme();

  const handleScrollToFeed = () => {
    feedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 500) {
        setIsLightMode(true);
      } else {
        setIsLightMode(false);
      }

      if (scrollTop <= 10) {
        window.isAutoScrollingUp = false;
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      setIsLightMode(false);
    };
  }, [setIsLightMode]);

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.active]: active,
        [styles.lightTheme]: isLightMode,
      })}
    >
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

        {children}

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

      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.brandInfo}>
            <Image
              src={images.logo_z}
              className={styles.footerLogo}
              alt="logo_footer"
            />
            <a
              href="mailto:zenithoravn@gmail.com"
              className={styles.footerLink}
            >
              zenithoravn@gmail.com
            </a>
          </div>
          <div className={styles.footerQuote}>
            <p>
              A sanctuary for deep thinkers, cosmic explorers, and lifetime
              learners.
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <Link to="/faq" className={styles.footerBottomLink}>
            FAQ
          </Link>
          <Link to="/terms" className={styles.footerBottomLink}>
            Terms of Service
          </Link>
          <Link to="/privacy" className={styles.footerBottomLink}>
            Privacy Policy
          </Link>
          <span className={styles.copyright}>© 2026 Zenithora</span>
        </div>
      </footer>
    </div>
  );
}

export default HomeLayout;
