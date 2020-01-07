// pega o storage padrao da aplicação (web = localstorage)
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  return persistReducer(
    {
      key: 'gobarberweb',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
};
