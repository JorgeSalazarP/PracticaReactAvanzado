import { combineReducers } from 'redux';
import advertsReducers from './advertsReducers';

export default combineReducers({
    adverts: advertsReducers
});