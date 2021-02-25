import React from 'react';
import axios from 'axios';
import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import PizzaSelector from '../PizzaSelector/PizzaSelector';
// import Checkout from '../Checkout/Checkout';
// import Admin from '../Admin/Admin';
import UserForm from '../UserForm/UserForm';

function App() {
  const pizzaList = useSelector((store) => store.pizzaList);

  useEffect(() => {
    console.log('use effected activated');
    getData();
  }, []); // end useEffect

  const getData = function () {
    axios({
      method: 'GET',

      url: '/api/pizza',
    })
      .then((res) => {
        console.log('get pizza response: ', res);
        dispatch({
          type: 'SET_PIZZA_LIST',
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  }; // end getData

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/userinfo">
        <UserForm />
      </Route>

      <PizzaSelector pizzaList={pizzaList} />
    </Router>
  );
}

export default App;
