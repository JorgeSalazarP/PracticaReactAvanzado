import client from './client';

export const BASE_URL = '/api';

export const getAdverts = () => {
  const url = `${BASE_URL}/v1/adverts`;
  return client.get(url);
};

export const getAdvertDetail = id => {
  const url = `${BASE_URL}/v1/adverts/${id}`;
  return client.get(url);
};

export const getAdvertsTags = () => {
  const url = `${BASE_URL}/v1/adverts/tags`;
  return client.get(url);
};

export const createNewAdvert = createAdvert => {
  const url = `${BASE_URL}/v1/adverts/`;
  return client.post(url,createAdvert);
  
  
}

export const deleteAdvert = id => {
  const url = `${BASE_URL}/v1/adverts/${id}`;
  return client.delete(url);
};






