import { apiInstance } from './apiManager';

const TWICH_TOKEN_URL = 'https://id.twitch.tv';
export const twitchAuth = async () => {
  return apiInstance
    .post(`${TWICH_TOKEN_URL}/oauth2/token`, {
      client_id: process.env.REACT_APP_TWITCH_CLIENT_ID,
      client_secret: process.env.REACT_APP_TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    })
    .then(({ data }: any) => {
      return data;
    })
    .catch((error: any) => {
      const { response } = error;
      const { data } = response;
      const { status, message } = data;
      return null;
      // console.error(status, message);
    });
};
