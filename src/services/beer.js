import { api } from './api';

export const getBeer = async () => {
  const result = await api.get('/beer/random_beer');
  return result.data;
};
