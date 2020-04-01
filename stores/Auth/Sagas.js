import {put, call, takeLatest} from 'redux-saga/effects';
import {AuthServices} from '../../services/AuthServices';
import {AUTH_CONSTANTS} from './constants';
import {AuthActions} from './Actions';

function* authLogin({valueLogin}) {
  try {
    const resp = yield call(AuthServices.authLogin, valueLogin);
    yield put(AuthActions.setAuthLogin(resp));
  } catch (err) {
    yield put(AuthActions.authLoginErr(err));
  }
}
export default function* watcher() {
  yield takeLatest(AUTH_CONSTANTS.AUTH_LOGIN, authLogin);
}
