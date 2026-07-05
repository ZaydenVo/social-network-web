import { createContext, useEffect, useState } from 'react';
import httpRequest from '~/utils/httpRequest';

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserInfo(null);
      return;
    }

    try {
      const response = await httpRequest.get('profile/users/my-info', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserInfo(response.data.result);
    } catch (error) {
      console.log(error);
      localStorage.removeItem('token');
      setUserInfo(null);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const isLogin = !!userInfo;

  return (
    <UserInfoContext.Provider value={{ userInfo, isLogin, fetchUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}
