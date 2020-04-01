/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './stores/reducers';
import {Provider} from 'react-redux';
import rootSaga from './stores/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const storeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => storeRedux);
