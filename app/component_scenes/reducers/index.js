import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';

const appReducer = combineReducers({
  home: HomeReducer
});

function index(state, action) {
  return appReducer(state, action);
}
export default index;