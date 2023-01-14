import { getAuthoToken } from '../../api/apiHeader';

const HomeComponent = () => {
  return (
    <div>
      The HOMEasdfasdfasdfa
      <div className="parent" style={{}}>
        parent
        <div>children1</div>
        <div>children2</div>
      </div>
      <button type="button" onClick={() => getAuthoToken()}>
        getGamesList
      </button>
    </div>
  );
};
export default HomeComponent;
