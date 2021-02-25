import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
  if (action.type === '') {
      return action.payload;
  }
}

const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
  }),
  applyMiddleware(logger),
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />, 
  </Provider>
  document.getElementById('root'));
