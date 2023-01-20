import { useQuery } from '@tanstack/react-query';
import { Loading } from '../../components/loading';
import { fetchTwitchTopGameList } from '../../api/fetchTwitchTopGameList';

interface DataPropTypes {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string | '';
}

const TwichComponent = () => {
  const { isLoading, error, isError, data } = useQuery(
    ['topGames'],
    fetchTwitchTopGameList,
    { refetchOnWindowFocus: false }, // Default: true, 유저가 app을 떠났다가 돌아올(포커스) 시 자동호출 방지;
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>{`An error has: ${error}`}</div>;

  /**
   * 페이지 클릭 시 api 호출 막기
   * CustomHook으로 분리해 보기
   *
   */

  return (
    <section className="container mt-3">
      <h1 className="title has-text-white	mb-4">Twitch TopGamesList</h1>
      <div className="columns is-multiline m-auto">
        {data.data.map((item: DataPropTypes) => {
          return (
            <div key={item.id} className="column is-one-quarter">
              {/* thumbArea */}
              <div className="thumInfo image is-200x300">
                <img
                  src={item.box_art_url
                    .replace('{width}', '200')
                    .replace('{height}', '300')}
                  alt=""
                />
              </div>
              {/* thumbArea */}
              {/* otherInfo */}
              <div className="infoArea is-flex is-flex-direction-column mt-1">
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.igdb_id}</span>
              </div>
              {/* otherInfo */}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TwichComponent;
