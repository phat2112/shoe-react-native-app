import axios from 'axios';

const authLogin = valueLogin => {
  return axios
    .post('https://reqres.in/api/login', valueLogin)
    .then(res => res.data);
};
export const AuthServices = {
  authLogin,
}