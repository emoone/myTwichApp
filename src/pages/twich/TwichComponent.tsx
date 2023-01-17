import React, { useEffect } from 'react';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import fetchTwichTopGameList from '../../api/twichTopGameList';
import { apiInstance } from '../../api';
import { UseToken } from '../../util';

interface DataPropTypes {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string | '';
}

const TwichComponent = () => {
  const { getAccessToken } = UseToken();
  const TWICH_BASE_URL = 'https://api.twitch.tv';
  const { isLoading, error, data, isFetching } = useQuery(
    ['topGames'],
    async () => {
      const testData = await apiInstance
        .get(`${TWICH_BASE_URL}/helix/games/top`, {
          headers: {
            'client-id': process.env.REACT_APP_TWICH_CLIENT_ID,
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then(res => {
          return res.data.data;
        });

      return testData;
    },
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`An error has: ${error}`}</div>;

  // useEffect(() => {
  //   if (!data) return;
  // }, []);
  console.log(data);

  return (
    <section>
      Twitch Area
      {data.map((item: DataPropTypes, index: number) => {
        return (
          <div key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.igdb_id}</span>
            <img src={item.box_art_url} alt="" />
          </div>
        );
      })}
    </section>
  );
};
export default TwichComponent;
