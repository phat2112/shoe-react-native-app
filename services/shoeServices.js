import axios from 'axios';
import {decamelizeKeys, camelizeKeys} from 'humps';

const getShoeList = () => {
  return axios
    .get('https://shop-shoe-database.herokuapp.com/shoe-lists')
    .then(res => camelizeKeys(res.data));
};
const getShoeListId = idListShoe => {
  return axios
    .get(
      `https://shop-shoe-database.herokuapp.com/shoe-lists/${idListShoe}`,
      idListShoe,
    )
    .then(res => camelizeKeys(res.data));
};
const shoeDetailId = idShoe => {
  console.log('idShoe', idShoe);
  return axios
    .get(`https://shop-shoe-database.herokuapp.com/shoes/${idShoe}`, idShoe)
    .then(res => camelizeKeys(res.data));
};
export const ShoeServices = {
  getShoeList,
  getShoeListId,
  shoeDetailId,
};
