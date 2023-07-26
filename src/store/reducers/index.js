import { combineReducers } from 'redux';
import { todosReducer } from './todos';

const rootReducer = combineReducers({
  todosValues: todosReducer,
});

export default rootReducer;
