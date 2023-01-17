import { apiInstance } from '.';
import { UseToken } from '../util';

const TWICH_TOKEN_URL = 'https://id.twitch.tv';
const twichAuth = () => {
  const { setAccessToken } = UseToken();
  apiInstance
    .post(`${TWICH_TOKEN_URL}/oauth2/token`, {
      client_id: process.env.REACT_APP_TWICH_CLIENT_ID,
      client_secret: process.env.REACT_APP_TWICH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    })
    .then(({ data }) => {
      console.log('token is', data);
      setAccessToken(data.access_token);
    })
    .catch(error => {
      const { response } = error;
      const { data } = response;
      const { status, message } = data;
      console.error(status, message);
    });
};

export default twichAuth;
