import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faEarthAsia,
  faFilePen,
  faGear,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const getMenuItems = (userInfo) => {
  const username = userInfo?.username || 'me';

  return [
    {
      icon: faUser,
      label: 'Profile',
      to: `/profile/${username}`,
    },
    {
      icon: faBookmark,
      label: 'Bookmarked',
      to: '/bookmarks',
    },
    {
      icon: faFilePen,
      label: 'Drafts',
      to: '/drafts',
    },
    {
      icon: faGear,
      label: 'Settings',
      to: '/settings',
      hasSeparator: true,
    },
    {
      icon: faEarthAsia,
      label: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            label: 'English',
          },
          {
            type: 'language',
            code: 'vi',
            label: 'Vietnamese',
          },
        ],
      },
    },
    {
      icon: faSignOutAlt,
      label: 'Sign out',
      action: 'logout',
      isDanger: true,
      hasSeparator: true,
    },
  ];
};
