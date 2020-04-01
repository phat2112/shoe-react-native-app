import * as config from './config';

export const handleUploadImage = imageValue => {
  const url = 'https://shop-shoe-database.herokuapp.com';
  if (imageValue) {
    return url + imageValue;
  }
};

export const emailValidate = valueEmail => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(valueEmail).toLowerCase());
}