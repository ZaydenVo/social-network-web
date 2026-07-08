import styles from './Notification.module.scss';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { NotificationItem } from './NotificationItem';

const MOCK_NOTIFICATIONS = [
  {
    id: 'n1',
    type: 'LIKE',
    user: {
      name: 'Nguyễn Minh Thư',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thu',
    },
    content: 'đã thích bài viết của bạn: "Chào sân Zenithora! Nơi kết nối..."',
    createdAt: '12 phút trước',
    isUnread: true,
  },
  {
    id: 'n2',
    type: 'COMMENT',
    user: {
      name: 'Trần Hoàng Long',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=long',
    },
    content:
      'đã bình luận về trạng thái của bạn: "Giao diện nhìn cuốn thực sự!"',
    createdAt: '1 giờ trước',
    isUnread: true,
  },
  {
    id: 'n3',
    type: 'FOLLOW',
    user: {
      name: 'Hoàng Yến',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yen',
    },
    content: 'đã bắt đầu theo dõi bạn.',
    createdAt: '3 ngày trước',
    isUnread: false,
  },
];

function Notification({ isLightMode }) {
  return (
    <Popover.Root modal={false}>
      <Popover.Trigger asChild>
        <Button primary circle>
          <FontAwesomeIcon icon={faBell} />
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={8}
          className={clsx(styles.popover, { lightTheme: isLightMode })}
        >
          <div className={styles.header}>Notification</div>

          {MOCK_NOTIFICATIONS.map((notification) => (
            <div key={notification.id} className={styles.wrapper}>
              <NotificationItem
                notification={notification}
                isLightMode={isLightMode}
              />
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Notification;
