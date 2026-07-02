import styles from './InsightCard.module.scss';

function InsightCard({ tag, content, author }) {
  return (
    <div className={styles.cardWrapper}>
      <span className={styles.cardTag}>#{tag}</span>

      <p className={styles.cardContent}>"{content}"</p>

      <span className={styles.cardAuthor}>- {author}</span>

      <div className={styles.glowEffect}></div>
    </div>
  );
}

export default InsightCard;
