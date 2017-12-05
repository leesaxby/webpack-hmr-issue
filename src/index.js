import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

/* global process*/
if(process.env.NODE_ENV !== 'production') {
    /*global module*/
    if (module.hot) {
        module.hot.accept('./App', () => { render(App); });
    }
}
