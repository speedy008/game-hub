import axios from "axios";
/* IF YOU have created react App using vite and dont have webpackconfig file please use import.meta instead of process.env */
const BASE_URL = import.meta.env.VITE_GAME_API_URL
const BASE_URL_KEY = import.meta.env.VITE_GAME_API_KEY
console.log(BASE_URL);
export default axios.create({
  baseURL: BASE_URL,
  params: {
    key: BASE_URL_KEY,
  }
});