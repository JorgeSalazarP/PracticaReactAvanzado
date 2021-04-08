import client from './client';
export const BASE_URL = '/api';


export const getAdverts = () => {
  const url = `${BASE_URL}/v1/adverts`;
  return client.get(url);
};

export const getAdvertDetail = (id) => {
  const url = `${BASE_URL}/v1/adverts/${id}`;
  return client.get(url);
};




