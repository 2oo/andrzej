import {combineReducers} from 'redux';
import andrzejs from './andrzejs';
import januszes from './januszes';

export default function createReducer() {
    return combineReducers({
        andrzejs,
        januszes
    });
}

