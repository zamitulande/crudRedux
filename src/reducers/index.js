import {combineReducers} from 'redux';
import dotacionReducers from './dotacionReducers';
import guardasReducers from './guardasReducers';

export default combineReducers({
    guardas: guardasReducers,
    dotacion : dotacionReducers
});