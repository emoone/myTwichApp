// curl -X GET 'https://api.twitch.tv/helix/clips?id=AwkwardHelplessSalamanderSwiftRage' \
// -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
// -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'

// {
//   "data": [
//     {
//       "id": "AwkwardHelplessSalamanderSwiftRage",
//       "url": "https://clips.twitch.tv/AwkwardHelplessSalamanderSwiftRage",
//       "embed_url": "https://clips.twitch.tv/embed?clip=AwkwardHelplessSalamanderSwiftRage",
//       "broadcaster_id": "67955580",
//       "broadcaster_name": "ChewieMelodies",
//       "creator_id": "53834192",
//       "creator_name": "BlackNova03",
//       "video_id": "205586603",
//       "game_id": "488191",
//       "language": "en",
//       "title": "babymetal",
//       "view_count": 10,
//       "created_at": "2017-11-30T22:34:18Z",
//       "thumbnail_url": "https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg",
//       "duration": 60,
//       "vod_offset": 480
//     }
//   ]
// }

/**
 * 1. getSearchCategoryList,
 * 2. 검색 시 리스트 filter,
 * 3. ,
 * 4, 마,
 *
 * @param url
 * @param data
 * @returns
 */
// POST 메서드 구현 예제
const getTwitchItems = async (url = '', data = {}) => {
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

export default getTwitchItems;
