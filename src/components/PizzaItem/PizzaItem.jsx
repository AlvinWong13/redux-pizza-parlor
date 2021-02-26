import {useDispatch} from 'react-redux';
import {useState, useSelector} from 'react';
import './PizzaItem.css';

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();

  const placeOrder = function (e) {
    dispatch({
      type: 'ADD_PIZZA',
      payload: { id: e.target.id, price: e.target.value },
    });
  }; // end PlaceOrder

  const [inCart, removeCart] = useState(false);

  const toggleRemove = () => {
    removeCart(!inCart);
  }

  return(
    <div className="card">
      <img src={pizza.image_path} alt={pizza.name} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4> 
        <p className="card-text">{pizza.description}</p>
        <p id="price-text">${pizza.price}</p> 
      </div>
      <div className="card-footer">
        {/* <button value={pizza.price} id={pizza.id} onClick={placeOrder}> Order Me!</button> */}
        <button onClick={() => { toggleRemove(); inCart? dispatch({type: 'REMOVE_PIZZA', payload: pizza}):
        dispatch({type:'ADD_PIZZA', payload: pizza});
        }}>{inCart ? <span>Remove</span>: <span>Add</span> }</button>
      </div>
    </div>
  );
}

export default PizzaItem;
