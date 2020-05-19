import axios from 'axios';
import { BASE_URL, PROXY_URL } from '../constants';

const initialize = axios.create({
  baseURL: `${PROXY_URL + BASE_URL}`,
  withCredentials: true,
});

export default initialize;
