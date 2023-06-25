import {createStore} from 'redux';
import {Reducers} from './Reducer';
import {combineReducers} from 'redux';
const routeReducer = combineReducers({
  Reducers,
});
export const store = createStore(routeReducer);
