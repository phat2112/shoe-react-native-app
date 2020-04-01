import {AUTH_CONSTANTS} from './constants';

const authLogin = valueLogin => ({
  type: AUTH_CONSTANTS.AUTH_LOGIN,
  valueLogin,
});
const setAuthLogin = authToken => ({
  type: AUTH_CONSTANTS.AUTH_LGOIN_SUCCESS,
  authToken,
});
const authLoginErr = err => ({
  type: AUTH_CONSTANTS.AUTH_LOGIN_ERROR,
  err,
});
export const AuthActions = {
  authLogin,
  setAuthLogin,
  authLoginErr,
};
