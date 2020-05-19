import axios from 'axios';
import { BASE_URL } from '../constants';

const initialize = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default initialize;
