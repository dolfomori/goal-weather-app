import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.metaweather.com/api/location/',
});

export const apiIcons =
  'https://www.metaweather.com/static/img/weather/png/64/';
