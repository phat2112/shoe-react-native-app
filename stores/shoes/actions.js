import {SHOE_CONSTANT} from './constants';

const getShoeList = () => ({
  type: SHOE_CONSTANT.GET_SHOE_LIST,
});
const setShoeList = listShoe => ({
  type: SHOE_CONSTANT.SET_SHOE_LIST,
  listShoe,
});
const getShoeErr = error => ({
  type: SHOE_CONSTANT.SET_SHOE_LIST_ERROR,
  error,
});
const getShoeListId = idListShoe => ({
  type: SHOE_CONSTANT.GET_SHOE_LIST_ID,
  idListShoe,
});
const setShoeListId = listShoeCategory => ({
  type: SHOE_CONSTANT.SET_SHOE_LIST_ID,
  listShoeCategory,
});
const getShoeid = idShoe => ({
  type: SHOE_CONSTANT.GET_SHOE_INFO,
  idShoe,
});
const setShoeIdData = idShoeData => ({
  type: SHOE_CONSTANT.SET_SHOE_INFO,
  idShoeData,
});
const getShoeIdError = err => ({
  type: SHOE_CONSTANT.GET_SHOE_INFO_ERROR,
  err,
});

export const ShoeActions = {
  getShoeList,
  setShoeList,
  getShoeErr,
  getShoeListId,
  setShoeListId,
  getShoeid,
  setShoeIdData,
  getShoeIdError,
};
