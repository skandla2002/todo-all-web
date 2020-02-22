import { combineReducers } from 'redux';
import counter from './counter';
import userInfo from './userInfo';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    userInfo,
    todos
});

export default rootReducer;