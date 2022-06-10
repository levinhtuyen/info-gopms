import { BASE_URL } from '@/constants/urls';
import axios from 'axios';

export const api = axios.create({
  baseURL: BASE_URL,
});
