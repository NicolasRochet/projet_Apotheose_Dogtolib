import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from '../middlewares/userMiddleware';
import { applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Import de mon reducer
import reducer from '../reducer/index';

// création du store avec persist
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(userMiddleware), composeWithDevTools())
  const persistor = persistStore(store)
  return { store, persistor }
}


