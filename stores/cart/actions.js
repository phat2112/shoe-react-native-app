import {CART_CONSTANTS} from './constants';

const addToCart = valueItem => ({
  type: CART_CONSTANTS.ADD_TO_CART,
  valueItem,
});
const setToCart = valueCart => ({
  type: CART_CONSTANTS.SET_CART,
  valueCart,
});
const removeCart = idItem => ({
  type: CART_CONSTANTS.REMOVE_CART,
  idItem,
});
export const CartActions = {
  addToCart,
  setToCart,
  removeCart,
};
