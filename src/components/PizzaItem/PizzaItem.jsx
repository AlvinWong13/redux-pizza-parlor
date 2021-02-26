import {useDispatch} from 'react-redux';
import {useState, useSelector} from 'react';

function PizzaItem({pizza}) {

  const pizzaList = useSelector(store => store.pizzaList);

  const dispatch = useDispatch();

  const placeOrder = function (e) {

    console.log('place order', e.target.value);
    
    let orderedPizza;

    pizzaList.forEach(pizza => {
      console.log(pizzaList);
      if (pizza.id === e.target.value) pizza = orderedPizza;
    });

    dispatch({
      type: 'ADD_PIZZA',
      payload: orderedPizza 
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