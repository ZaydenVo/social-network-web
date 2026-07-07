import { useTheme } from '~/Provider/ThemeProvider';
import styles from './ResultItem.module.scss';
import { Image } from '~/components/Image';
import clsx from 'clsx';

const ResultItem = ({ result, onClick }) => {
  const { isLightMode } = useTheme();

  if (result.username) {
    return (
      <div
        className={clsx(styles.resultsWrapper, { lightTheme: isLightMode })}
        onClick={onClick}
      >
        <Image src={result.avatar} alt="avatar" />
        <div className={styles.userInfo}>
          <span className={styles.username}>{result.name}</span>
          <span className={styles.subtitle}>{result.subtitle}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(styles.resultsWrapper, { lightTheme: isLightMode })}
      onClick={onClick}
    >
      <div className={styles.postContent}>
        <span className={styles.title}>{result.title}</span>
        <span className={styles.postMeta}>
          bởi {result.author} • {result.createdAt}
        </span>
      </div>
    </div>
  );
};

export default ResultItem;
