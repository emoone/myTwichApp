import { apiInstance } from './apiManager';
import { useToken } from '../util';

const TWICH_BASE_URL = 'https://api.twitch.tv';
/**
 * 트위치 TopGames Data 받는 api
 * @returns
 */
export const fetchTwitchTopGames = async ({
  pagination,
  limit = 20,
}: {
  pagination: string;
  limit?: number;
}) => {
  try {
    const { token } = await useToken.getAccessToken();

    if (!token) throw new Error('no Token');

    const { data } = await apiInstance.get(
      `${TWICH_BASE_URL}/helix/games/top`,
      {
        params: { after: pagination, first: limit },
        headers: {
          'client-id': process.env.REACT_APP_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data;
  } catch (e) {
    return e;
  }
};

/**
 * 1. getSearchCategoryList,
 * 2. 검색 시 리스트 filter,
 * @param url
 * @param data
 * @returns
 */
// POST 메서드 구현 예제
export const getTwitchItems = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'GET', // *GET | POST | PUT | DELETE
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //   'Content-Type': 'application/json',
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  // 옵션 기본 값은 *로 강조

  try {
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
  } catch (err: any) {
    console.log('data is Error');
  }
};

const GET_GAMES_URL = 'https://api.twitch.tv/helix';

const apiTwStreams = async () => {
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

export default apiTwStreams;
