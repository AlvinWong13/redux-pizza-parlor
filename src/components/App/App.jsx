import React from 'react';
import axios from 'axios';
import './App.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Header from '../Header/Header';
import PizzaSelector from '../PizzaSelector/PizzaSelector';
import UserForm from '../UserForm/UserForm';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();

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
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }; // end getData

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/select">
        <Header />
        <PizzaSelector getData={getData} />
      </Route>
      <Route path="/userinfo">
        <Header />
        <UserForm />
      </Route>

      <Route path="/checkout">
        <Header />
        <Checkout getData={getData} />
      </Route>

      <Route path="/admin">
        <Header />
        <Admin getData={getData} />
      </Route>
    </Router>
  );
}

export default App;
