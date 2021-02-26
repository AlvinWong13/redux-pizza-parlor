import {useDispatch} from 'react-redux';
import {useState, useSelector} from 'react';
import './PizzaItem.css';

function PizzaItem({pizza}) {

  const dispatch = useDispatch();

  const placeOrder = function (e) {
    console.log('place order', e.target.value);
    
    dispatch({
      type: 'ADD_PIZZA',
      payload: e.target.value
    });

  } // end PlaceOrder

  return(
    <div className="card">
      <img src={pizza.image_path} alt={pizza.name} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4> 
        <p className="card-text">{pizza.description}</p>
        <p id="price-text">${pizza.price}</p> 
      </div>
      <div className="card-footer">
        <button value={pizza.id} onClick={placeOrder}> Order Me!</button>
      </div>
    </div>
  )
}

export default PizzaItem;