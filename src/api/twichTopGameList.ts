import { useQuery } from '@tanstack/react-query';
import { UseToken } from '../util';
import { apiInstance } from './apiManager';

const TWICH_BASE_URL = 'https://api.twitch.tv';

const fetchTwichTopGameList = async () => {
  const { getAccessToken } = UseToken();

  await apiInstance
    .get(`${TWICH_BASE_URL}/helix/games/top`, {
      headers: {
        'client-id': process.env.REACT_APP_TWICH_CLIENT_ID,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
    .then(({ data }) => {
      // console.log('gameList is', data);
      return data;
    })
    .catch(error => {
      console.log('error is', error);
      return error;
    });
};

export default fetchTwichTopGameList;
