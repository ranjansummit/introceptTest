
import HomeReducer from './HomeReducer';

const appReducer = combineReducers({
  credit: HomeReducer,
});

function index(state, action) {
  return appReducer(state, action);
}
export default index;