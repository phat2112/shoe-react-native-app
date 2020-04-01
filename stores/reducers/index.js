import {combineReducers} from 'redux';
import {ShoeReducers} from '../shoes/reducers';
import {AuthReducers} from '../Auth/Reducers';
import {CartReducers} from '../cart/reducers';

const rootReducer = combineReducers({
  listShoeReducer: ShoeReducers.setListShoe,
  listShoeIdReducer: ShoeReducers.setListShoeId,
  shoeInformation: ShoeReducers.setShoeIdData,

  authLogin: AuthReducers.setAuthLogin,

  cart: CartReducers.addToCart,
});
export default rootReducer;
