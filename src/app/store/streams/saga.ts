import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { TwStreamItemType } from '../../../pages/twStream/twStreamVM';
import apiTwStreams from '../../../api/apiTwitch';

function* fetchStream(action: PayloadAction<TwStreamItemType>) {
  try {
    const getStreamData = async () => {
      await apiTwStreams()
        .then(res => {
          const { data } = res;
          return data;
        })
        .catch(err => {});
    };
    const stream: TwStreamItemType = yield call(
      apiTwStreams,
      action.payload.gameId,
    );

    yield put({ type: 'STREAM_FETCH_SUCCESS', stream });
  } catch (err: any) {
    yield put({ type: 'STEAM_FETCH_FAILD', message: err.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* streamSaga() {
  yield takeEvery('STREAM_FETCH_REQUESTED', fetchStream);
}

/**
 * 중복 클릭 시 마지막 클릭만 호출
 */
function* streamSaga() {
  yield takeLatest('STREAM_FETCH_REQUESTED', fetchStream);
}
export default streamSaga;
