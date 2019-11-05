import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    item: ItemReducer,
    error: errorReducer,
    auth: authReducer
})