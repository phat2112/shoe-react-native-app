import {all} from 'redux-saga/effects';
import ShoeSaga from '../shoes/sagas';
import AuthSaga from '../Auth/Sagas';

export default function* rootSaga() {
  yield all([ShoeSaga(), AuthSaga()]);
}
