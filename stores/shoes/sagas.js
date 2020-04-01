import {put, call, takeLatest} from 'redux-saga/effects';
import {SHOE_CONSTANT} from './constants';
import {ShoeServices} from '../../services/shoeServices';
import {ShoeActions} from './actions';

function* getShoeList() {
  try {
    const resp = yield call(ShoeServices.getShoeList);
    yield put(ShoeActions.setShoeList(resp));
  } catch (err) {
    yield put(ShoeActions.getShoeErr(err));
  }
}
function* getIdShoeList({idListShoe}) {
  try {
    const resp = yield call(ShoeServices.getShoeListId, idListShoe);
    yield put(ShoeActions.setShoeListId(resp));
  } catch (err) {
    yield put(ShoeActions.getShoeErr(err));
  }
}
function* getShoeIdData({idShoe}) {
  try {
    const resp = yield call(ShoeServices.shoeDetailId, idShoe);
    yield put(ShoeActions.setShoeIdData(resp));
  } catch (err){
    yield put(ShoeActions.getShoeIdError(err));
  }
}
export default function* watcher() {
  yield takeLatest(SHOE_CONSTANT.GET_SHOE_LIST, getShoeList);
  yield takeLatest(SHOE_CONSTANT.GET_SHOE_LIST_ID, getIdShoeList);
  yield takeLatest(SHOE_CONSTANT. GET_SHOE_INFO, getShoeIdData);
}
