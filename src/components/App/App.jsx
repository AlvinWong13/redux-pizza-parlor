import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
// import PizzaSelector from '../PizzaSelector/PizzaSelector';
// import Checkout from '../Checkout/Checkout';
// import Admin from '../Admin/Admin';

function App() {

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
