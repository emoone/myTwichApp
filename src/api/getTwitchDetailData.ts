import { useToken } from '../util';

const GET_GAMES_URL = 'https://api.twitch.tv/helix';

// '/games?id=33214';
const getTwitchDetailData = async (gameName: string) => {
  try {
    const { token } = await useToken.getAccessToken();
    if (!token) throw new Error('no Token');

    const headersInit: {
      'client-id': string;
      Authorization: string;
    } = {
      'client-id': process.env.REACT_APP_TWITCH_CLIENT_ID!,
      Authorization: `Bearer ${token}`,
    };
    const headers = new Headers(headersInit);
    const request = new Request(`${GET_GAMES_URL}/streams`, {
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    });

    const response = await fetch(request);

    const getGamesData = response.json();

    return getGamesData;
  } catch (e) {
    return e;
  }
};

export default getTwitchDetailData;
