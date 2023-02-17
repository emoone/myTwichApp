import { useInfiniteQuery } from '@tanstack/react-query';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/loading';
import { fetchTwitchTopGameList } from '../../api/fetchTwitchTopGameList';
import { useIntersectionObserver } from '../../hook';

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
  const targetRef = useRef<HTMLDivElement>(null);

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
        const pagination = lastPage.pagination.cursor;
        return pagination || undefined;
      },
    },
  );
  // useInfiniteQuery

  // useIntersectionObserver
  // TODO: fetchNextPage 함수 두번 호출 문제 해결 필요.

  const nextPageCallback = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [fetchNextPage, hasNextPage]);
  useIntersectionObserver(nextPageCallback, { targetRef });
  // useIntersectionObserver

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
                  <Link to={`/twitch/${c.name}`}>
                    {/* thumbArea */}
                    <div className="thumInfo image aspect-[200/300]">
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
                  </Link>
                </div>
              );
            });
          })}

          <div ref={targetRef} id="observeTarget" />
        </div>
      </div>
    </section>
  );
};
export default TwichComponent;
