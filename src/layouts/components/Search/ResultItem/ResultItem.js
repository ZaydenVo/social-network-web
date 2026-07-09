import styles from './ResultItem.module.scss';
import { Image } from '~/components/Image';

const ResultItem = ({ result, onClick }) => {
  if (result.username) {
    return (
      <div className={styles.resultsWrapper} onClick={onClick}>
        <Image src={result.avatar} alt="avatar" />
        <div className={styles.userInfo}>
          <span className={styles.username}>{result.name}</span>
          <span className={styles.subtitle}>{result.subtitle}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.resultsWrapper} onClick={onClick}>
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
