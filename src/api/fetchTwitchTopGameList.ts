import { apiInstance } from './apiManager';
import { useToken } from '../util';

const TWICH_BASE_URL = 'https://api.twitch.tv';

/**
 * promises 큐화 시키기 (순차적으로 호출)
 * @returns
 */
export const fetchTwitchTopGameList = async ({
  pagination,
  first = 20,
}: {
  pagination: string;
  first?: number;
}) => {
  try {
    const { token } = await useToken.getAccessToken();

    if (!token) throw new Error('no Token');

    const { data } = await apiInstance.get(
      `${TWICH_BASE_URL}/helix/games/top`,
      {
        params: { after: pagination, first },
        headers: {
          'client-id': process.env.REACT_APP_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
};
