import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';
import { BASE_URL } from './adverts';

export const login = (credentials,rememberLogin) => {
  return client.post(`${BASE_URL}/auth/login`, credentials).then(({ accessToken }) => {
    configureClient({ accessToken });
    if(rememberLogin){
      
      storage.set('auth', accessToken);
    }

  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
