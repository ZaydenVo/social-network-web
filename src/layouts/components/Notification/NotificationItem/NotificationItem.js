import clsx from 'clsx';
import styles from './NotificationItem.module.scss';
import { Image } from '~/components/Image';

function NotificationItem({ notification }) {
  return (
    <div className={styles.notificationContent}>
      <Image
        src={notification.user.avatar}
        alt={notification.user.name}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <p
          className={clsx(styles.text, {
            [styles.unread]: notification.isUnread,
          })}
        >
          <span className={styles.name}>{notification.user.name}</span>{' '}
          {notification.content}
        </p>
        <span className={styles.createdAt}>{notification.createdAt}</span>
      </div>
      {notification.isUnread && <div className={styles.unreadDot} />}
    </div>
  );
}

export default NotificationItem;
