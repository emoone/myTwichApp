import { twichAuth } from '../../api';

const HomeComponent = () => {
  return (
    <div>
      The HOME asdfasdfasdfa
      <div className="parent" style={{}}>
        parent
        <div>children1</div>
        <div>children2</div>
      </div>
      <button type="button" onClick={() => twichAuth()}>
        getTopGames
      </button>
      {}
    </div>
  );
};
export default HomeComponent;
