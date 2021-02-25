import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect (() => {
    console.log("use effected activated");
    getData();
  }, []) // end useEffect

  const getData = function () {

    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then(res => {
      console.log('get pizza response: ', res);
    }).catch(err => console.log(err));

  } // end getData

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
