import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faEarthAsia,
  faFilePen,
  faGear,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import httpRequest from '~/utils/httpRequest';

export const getMenuItems = (userInfo, setUserInfo) => {
  const handleLogout = async () => {
    try {
      await httpRequest.post('identity/auth/logout', {
        token: localStorage.getItem('token'),
      });
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.removeItem('token');
      if (setUserInfo) setUserInfo(null);
    }
  };

  return [
    {
      icon: faUser,
      label: 'Profile',
      to: '/profile',
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
      action: handleLogout,
      isDanger: true,
      hasSeparator: true,
    },
  ];
};
