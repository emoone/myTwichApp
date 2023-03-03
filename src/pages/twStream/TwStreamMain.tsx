import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { TwStreamItemType } from './twStreamVM';
import apiTwStreams from '../../api/apiTwitch';

const TwStreamMain = () => {
  const [isMount, setIsMount] = useState(false);
  const [testData, setTestData] = useState<TwStreamItemType[]>([]);
  const param = useParams();
  useEffect(() => {
    const getGamesData = apiTwStreams();

    const test = async () => {
      await getGamesData
        .then(res => {
          const { data } = res;
          const resultItemList = _.transform(
            data,
            (result: TwStreamItemType[], c) => {
              const gameItem: TwStreamItemType = {
                id: c.game_id,
                userId: c.user_id,
                userLogin: c.user_login,
                userName: c.user_name,
                gameId: c.game_id,
                thumbnailUrl: c.thumbnail_url,
                viewerCount: c.viewer_count,
              };
              result.push(gameItem);
            },
            [],
          );
          setTestData(resultItemList);
        })
        .catch(err => {
          console.log(err);
        });
    };
    test();
  }, []);

  return (
    <div>
      Games Page
      {testData.map((item, index) => {
        return (
          <div key={item.userId}>
            <div>
              <img
                src={item.thumbnailUrl
                  .replace('{width}', '600')
                  .replace('{height}', '300')}
                alt=""
                srcSet=""
              />
            </div>
            <div>{item.userName}</div>
            <div>{item.userId}</div>
            <div>{item.userLogin}</div>
            <div>{item.viewerCount}</div>
          </div>
        );
      })}
    </div>
  );
};
export default TwStreamMain;
