import {useDispatch} from 'react-redux';
import {useState, useSelector} from 'react';

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
    <div>
      <h2>
        {pizza.name}
      </h2> 
      {/* {setIndividPizza(pizza)} */}
      <img src={pizza.image_path} alt={pizza.name} />

      <p>
        {pizza.price}
      </p> 

      <button value={pizza.id} onClick={placeOrder}> Order Me!</button>

    </div>
  )
}

export default PizzaItem;