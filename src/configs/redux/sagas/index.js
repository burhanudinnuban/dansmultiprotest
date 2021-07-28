import {takeLatest} from 'redux-saga/effects';
import {setDataLogin} from '../reducer/global';
import {handleGetDB} from './handler';

export function* watcherSaga() {
  yield takeLatest(setDataLogin, handleGetDB);
}
