import {call, put} from 'redux-saga/effects';
import {setDataLogin} from '../../reducer/global';
import {requestGetDB} from '../request';

export function* handleGetDB(action) {
  try {
    const response = yield call(requestGetDB, action);
    const {data} = response;
    yield put(setDataLogin(data));
  } catch (error) {
    console.log(error);
  }
}
