import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Slender Slice of Heaven</h1>
    </header>
    <br />
    <Link to="/select" >Order Pizza!</Link>
    <br />
    <img src='images/pizza_photo.png' />
    <p>Pizza is great.</p>
  </div>
  )
}

export default Home;