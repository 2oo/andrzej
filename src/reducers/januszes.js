import {createReducer} from 'redux-create-reducer';
import {
    ADD_JANUSZ
} from '../constants/actionTypes';

var nextId = 1;

const initialState = [
    {
        id: nextId++,
        name: 'Janusz'
    }
];

export default createReducer(initialState, {
    [ADD_JANUSZ]: state => {
        return [...state, {
            id: nextId++,
            name: 'Janusz'
        }];
    }
});
