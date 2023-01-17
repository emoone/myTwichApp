import { twichAuth } from '../api';

const UseToken = () => {
  const getAccessToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      twichAuth();
    }
    return token;
  };

  const setAccessToken = (accessToken: string) => {
    return localStorage.setItem('token', accessToken);
  };

  return {
    getAccessToken,
    setAccessToken,
  };
};
export default UseToken;
