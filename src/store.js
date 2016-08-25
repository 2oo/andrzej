import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import debug from 'debug-levels';

import DevTools from './containers/DevTools';

import createReducer from './reducers';

const loggerMiddleware = createLogger({
    logger: debug('state')
});

var store =
    createStore(
        createReducer(),
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
        )
    );

export default store;
