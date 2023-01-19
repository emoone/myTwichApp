import { apiInstance } from '.';

const TWICH_TOKEN_URL = 'https://id.twitch.tv';
const twitchAuth = async () => {
  return apiInstance
    .post(`${TWICH_TOKEN_URL}/oauth2/token`, {
      client_id: process.env.REACT_APP_TWITCH_CLIENT_ID,
      client_secret: process.env.REACT_APP_TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      const { response } = error;
      const { data } = response;
      const { status, message } = data;
      return null;
      // console.error(status, message);
    });
};

export default twitchAuth;
