import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import getTwitchDetailData from '../../api/getTwitchDetailData';
import { TwGameItemType } from './twGameVM';

const TwGamesComponent = () => {
  const [isMount, setIsMount] = useState(false);
  const [testData, setTestData] = useState<TwGameItemType[]>([]);
  const param = useParams();
  useEffect(() => {
    const getGamesData = getTwitchDetailData(param.id!);

    const text = async () => {
      await getGamesData
        .then(res => {
          const { data } = res;
          const resultItemList = _.transform(
            data,
            (result: TwGameItemType[], c) => {
              const gameItem: TwGameItemType = {
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
    text();
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
export default TwGamesComponent;
