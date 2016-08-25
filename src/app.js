import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import * as actions from './actions';
import reduxStore from './store';

import './styles/main.less';

@connect(state => ({store: state}))
export default class App extends Component {

    render() {

        const {store, dispatch} = this.props;

        const {andrzejs, januszes} = store;

        return (
            <div>

                <button onClick={() => dispatch(actions.addAndrzej())}>
                    Dodaj Andrzej
                </button>

                <button onClick={() => dispatch(actions.addJanusz())}>
                    Dodaj Jnuasz
                </button>

                {andrzejs.map(andrzej =>
                    <span className="andrzej"
                          style={{
                              top: Math.floor((Math.random() * 1000) + 1),
                              left: Math.floor((Math.random() * 1000) + 1),
                              backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},0.2)`
                          }}>
                        {andrzej.id}. {andrzej.name}
                    </span>
                )}

                {januszes.map(janusz =>
                    <span className="janusz"
                          style={{
                              top: Math.floor((Math.random() * 1000) + 1),
                              left: Math.floor((Math.random() * 1000) + 1),
                              backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},0.2)`
                          }}>
                        {janusz.id}. {janusz.name}
                    </span>
                )}

            </div>
        );
    }

}

render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
