import {createReducer} from 'redux-create-reducer';
import {
    ADD_ANDRZEJ
} from '../constants/actionTypes';

var nextId = 1;

const initialState = [
    {
        id: nextId++,
        name: 'Andrzej'
    }
];

export default createReducer(initialState, {
    [ADD_ANDRZEJ]: state => {
        return [...state, {
            id: nextId++,
            name: 'Andrzej'
        }];
    }
});
