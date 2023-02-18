import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../app/store/counterSlice';
import { RootState } from '../../app/store/store';

const TwDetailMain = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TEST DOM</h1>

      {/* <button type="button" className="btn">
        TEST BTN
      </button> */}

      <div className="bg-[red]">{count}</div>

      <button type="button" onClick={() => dispatch(increment())}>
        + BTN
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        - BTN
      </button>
    </div>
  );
};
export default TwDetailMain;
