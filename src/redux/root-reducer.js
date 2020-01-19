import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userRedcuer from '../redux/user/user.reducer';
import cartReducer   from '../redux/cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage : storage,
  whitelist : ['cart','directory']

};
 const rootReducer =  combineReducers({
  user: userRedcuer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer (persistConfig,rootReducer);
