import CryptoJS from 'crypto-js';
import { key } from '../secretKey';

export const Encrypt = (message) => {
  return CryptoJS.AES.encrypt(message, key).toString();
};

export const Decrypt = (message) => {
  return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);
};
