import clsx from 'clsx';
import styles from './MessageItem.module.scss';
import { Image } from '~/components/Image';

function MessageItem({ message, isLightMode }) {
  return (
    <div className={clsx(styles.messageContent, { lightTheme: isLightMode })}>
      <Image
        src={message.user.avatar}
        alt={message.user.name}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <span className={styles.name}>{message.user.name}</span>
        <span
          className={clsx(styles.lastMessage, {
            [styles.unread]: message.isUnread,
          })}
        >
          {message.lastMessage}
        </span>
        <span className={styles.createdAt}>{message.createdAt}</span>
      </div>
    </div>
  );
}

export default MessageItem;
