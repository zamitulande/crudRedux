import {combineReducers} from 'redux';
import guardasReducers from './guardasReducers';

export default combineReducers({
    guardas: guardasReducers
});