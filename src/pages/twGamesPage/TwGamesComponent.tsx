import { useParams } from 'react-router-dom';
import getTwitchDetailData from '../../api/getTwitchDetailData';

const TwGamesComponent = () => {
  const param = useParams();
  if (!param.id) return null;
  const getGamesData = getTwitchDetailData(param.id);
  console.log('param is', getGamesData);

  return <div>Games Page</div>;
};
export default TwGamesComponent;
