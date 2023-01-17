import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.twitch.tv',
  timeout: 5271123,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

/**
 * topRankingGamesList api
 *
 */

const getTopRankGamesList = (accessToken: string) => {
  apiInstance
    .get('/helix/games/top', {
      headers: {
        'client-id': process.env.REACT_APP_TWICH_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch(error => {
      console.log('error is', error);
    });
};

/**
 * accsess token 받는 api
 */
const authoInstance = axios.create({
  baseURL: 'https://id.twitch.tv',
  timeout: 5271123,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
const getAuthoToken = () => {
  authoInstance
    .post('/oauth2/token', {
      client_id: process.env.REACT_APP_TWICH_CLIENT_ID,
      client_secret: process.env.REACT_APP_TWICH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    })
    .then(({ data }) => {
      console.log(data);
      getTopRankGamesList(data.access_token);
    })
    .catch(error => {
      const { response } = error;
      const { data } = response;
      const { status, message } = data;
      console.log(status, message);
    });
};

export { getAuthoToken, getTopRankGamesList };
