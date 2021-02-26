import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// reducer to get pizzas from database
const pizzaList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PIZZA_LIST':
      return action.payload;
    default:
      return state;
  }
};

// reducer to track pizzas that are being purchased and price
const checkout = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      return [...state, action.payload];
    case 'REMOVE_PIZZA':
      return state.filter(pizza => pizza.id != action.payload.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

// reducer to keep customer information
const customerData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_CUSTOMER':
      return action.payload;
    default:
      return state;
  }
};



const storeInstance = createStore(
  combineReducers({
    pizzaList,
    checkout,
    customerData,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
