import {combineReducers} from 'redux';
import userRedcuer from '../redux/user/user.reducer';
import cartReducer   from '../redux/cart/cart.reducer'

export default combineReducers({
  user: userRedcuer,
  cart: cartReducer
})