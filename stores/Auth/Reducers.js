import {fromJS} from 'immutable';
import {AUTH_CONSTANTS} from './constants';
import {INITIAL_STATE} from './States';

const setAuthLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CONSTANTS.AUTH_LGOIN_SUCCESS:
      return state.merge(
        fromJS({
          authToken: action.authToken.token,
        }),
      );
    case AUTH_CONSTANTS.AUTH_LOGIN_ERROR:
      return state.merge(
        fromJS({
          authError: action.err,
        }),
      );
    default:
      return state;
  }
};
export const AuthReducers = {
  setAuthLogin,
}
