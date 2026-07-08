import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '~/components/Button';
import styles from './Message.module.scss';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { MessageItem } from './MessageItem';

const MOCK_MESSAGES = [
  {
    id: 'm1',
    user: {
      name: 'Nguyễn Minh Thư',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thu',
    },
    lastMessage:
      'Giao diện Zenithora mượt quá bạn ơi! Khi nào thì ra bản beta thế?',
    createdAt: '5 phút trước',
    isUnread: true,
  },
  {
    id: 'm2',
    user: {
      name: 'Trần Hoàng Long',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=long',
    },
    lastMessage: 'Đã gửi một ảnh',
    createdAt: '2 giờ trước',
    isUnread: false,
  },
  {
    id: 'm3',
    user: {
      name: 'Zenithora Team',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=zenithora',
    },
    lastMessage:
      'Tài khoản của bạn đã được xác minh thành công. Khám phá ngay!',
    createdAt: '1 ngày trước',
    isUnread: false,
  },
];

function Message({ isLightMode }) {
  return (
    <Popover.Root modal={false}>
      <Popover.Trigger asChild>
        <Button primary circle>
          <FontAwesomeIcon icon={faComment} />
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={8}
          className={clsx(styles.popover, { lightTheme: isLightMode })}
        >
          <div className={styles.header}>Message</div>

          {MOCK_MESSAGES.map((message) => (
            <div key={message.id} className={styles.wrapper}>
              <MessageItem message={message} isLightMode={isLightMode} />
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Message;
