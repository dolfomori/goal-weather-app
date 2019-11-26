import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.metaweather.com/api/location/search/',
});

export default api;
