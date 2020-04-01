import {SHOE_CONSTANT} from './constants';
import {fromJS} from 'immutable';
import {INITIAL_STATE} from './states';

const setListShoe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOE_CONSTANT.SET_SHOE_LIST:
      return state.merge(
        fromJS({
          listShoe: action.listShoe,
        }),
      );
    default:
      return state;
  }
};
const setListShoeId = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOE_CONSTANT.SET_SHOE_LIST_ID:
      return state.merge(
        fromJS({
          listShoeCategory: action.listShoeCategory,
        }),
      );
    default:
      return state;
  }
};
const setShoeIdData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOE_CONSTANT.SET_SHOE_INFO:
      return state.merge(
        fromJS({
          idShoeData: action.idShoeData,
        }),
      );
    default:
      return state;
  }
};
export const ShoeReducers = {
  setListShoe,
  setListShoeId,
  setShoeIdData,
};
