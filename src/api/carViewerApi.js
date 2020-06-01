import axios from 'axios';
import { BASE_URL } from '../constants';

const initialize = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

export default initialize;
