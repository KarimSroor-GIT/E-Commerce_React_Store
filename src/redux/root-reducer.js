import {combineReducers} from 'redux';
import userRedcuer from '../redux/user/user.reducer'

export default combineReducers({
  user: userRedcuer
})