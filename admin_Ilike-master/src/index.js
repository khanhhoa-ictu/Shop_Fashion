import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';
const middleware = [ thunk ];
    
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

let store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)
