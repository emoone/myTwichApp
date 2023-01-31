import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/loading';
import { fetchTwitchTopGameList } from '../../api/fetchTwitchTopGameList';

interface DataItemPropTypes {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string | '';
}

interface DataPropTypes {
  data: DataItemPropTypes[];
  pagination: { cursor: string };
}

/**
 * API 호출
 * intersectionobserver
 * CustomHook으로 분리해 보기
 *
 */
const TwichComponent = () => {
  const [pagination, setPagination] = useState('');
  const [gameList, setGameList] = useState<DataItemPropTypes[]>([]);

  // useQuery
  // const { isLoading, error, isError, data } = useQuery(
  //   ['topGames', pagination],
  //   () => fetchTwitchTopGameList({ pagination, count: 20 }),

  //   {
  //     keepPreviousData: false,
  //     refetchOnWindowFocus: false,
  //   }, // Default: true, 유저가 app을 떠났다가 돌아올(포커스) 시 자동호출 방지;
  // );
  // console.log('gamelist1', gameList);
  // useQuery

  // useInfiniteQuery
  const {
    data,
    status,
    hasNextPage,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery<DataPropTypes>(
    ['topGames'],
    ({ pageParam = '' }) => {
      return fetchTwitchTopGameList({ pagination: pageParam });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log('lastPage is', lastPage);
        const pagination = lastPage.pagination.cursor;
        return pagination || undefined;
      },
    },
  );
  // useInfiniteQuery

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      const total = scrollTop + window.innerHeight;

      if (total >= offsetHeight && hasNextPage) {
        fetchNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('has nextpage ', hasNextPage);
  const [] = testHook();

  if (isLoading) return <Loading />;
  if (isError) return <div>{`An error has: ${error}`}</div>;

  return (
    <section className="container mt-3">
      <h1 className="title has-text-white	mb-4">Twitch TopGamesList</h1>
      <div className="columns is-multiline m-auto">
        <div className="columns is-multiline m-auto">
          {data.pages.map((item, index) => {
            return item.data.map((c, index) => {
              return (
                <div key={c.id} className="column is-one-quarter">
                  {/* thumbArea */}
                  <div className="thumInfo image is-200x300">
                    <img
                      src={c.box_art_url
                        .replace('{width}', '200')
                        .replace('{height}', '300')}
                      alt=""
                    />
                  </div>
                  {/* thumbArea */}
                  {/* otherInfo */}
                  <div className="infoArea is-flex is-flex-direction-column mt-1">
                    <span>{c.id}</span>
                    <span>{c.name}</span>
                    <span>{c.igdb_id}</span>
                  </div>
                  {/* otherInfo */}
                </div>
              );
            });
          })}

          <button
            style={{ position: 'fixed', left: '5%' }}
            type="button"
            onClick={() => {
              // console.log('과연', data.pagination.cursor);
              // setPagination(data.pagination.cursor);
            }}>
            ADD
          </button>
        </div>
      </div>
    </section>
  );
};
export default TwichComponent;
