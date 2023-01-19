import { twitchAuth } from '../api';

class useToken {
  // accessToken 정보 받기 및 세팅 하기
  static getAccessToken = async () => {
    let token = localStorage.getItem('token');
    if (!token) {
      const data = await twitchAuth();
      if (data) {
        token = data ? data.access_token : null;
        this.setAccessToken(token ?? '');
      }
    }
    return { token };
  };

  // accessToken 정보 셋
  static setAccessToken = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
  };
}
export default useToken;
