import {CART_CONSTANTS} from './constants';
import {CartActions} from './actions';
import {INITIAL_STATE} from './states';

const addToCart = (state = INITIAL_STATE, action) => {
  console.log('action', action.valueItem);
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      let newItem = Object.assign({}, action.valueItem);
      let newCart = [...state.shoeCart];
      if (newCart.length > 0) {
        let sameItem = newCart.find(item => item.shoeData.id === newItem.shoeData.id);
        if (sameItem) {
          sameItem.quantity += newItem.quantity;
        } else {
          newCart.push(newItem);
        }
      } else {
        newCart.push(newItem);
      }
      return {
        ...state,
        shoeCart: newCart,
      };
    case CART_CONSTANTS.REMOVE_CART:
      let currentCart = [...state.shoeCart];
      let removeItem = action.idItem;
      console.log('removeItem', removeItem);
      if (currentCart.length > 0) {
        let newCart = currentCart.filter(item => item.shoeData.id !== removeItem);
        return {
          ...state,
          shoeCart: newCart,
        };
      }
      return {
        ...state,
      }
    default:
      return state;
  }
};
export const CartReducers = {
  addToCart,
};
