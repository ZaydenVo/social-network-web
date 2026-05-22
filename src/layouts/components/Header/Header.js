import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.leftBlock}>leftBlock</div>

        <div className={styles.centerBlock}>centerBlock</div>

        <div className={styles.rightBlock}>rightBlock</div>
      </div>
    </header>
  );
}

export default Header;
