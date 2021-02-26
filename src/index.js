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
const checkout = (state = { totalPrice: 0, checkoutList: [] }, action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      let totalPrice = state.totalPrice;
      return {
        totalPrice: (totalPrice += action.payload.price),
        checkoutList: [...state.checkoutList, action.payload],
      };
    case 'REMOVE_PIZZA':
      let newCheckout = state.checkoutList.filter(
        (stat) => stat.id != action.payload.id
      );
      return {
        totalPrice: state.totalPrice - action.payload.price,
        checkoutList: newCheckout,
      };
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

// reducer to add pizza in /pizzaItem
const addPizza = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      return [...state, { id: action.payload.id, quantity: 1 }];
    case 'REMOVE_PIZZA':
      let newList = state.filter((stat) => stat.id != action.payload.id);
      return newList;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    pizzaList,
    checkout,
    customerData,
    addPizza,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
