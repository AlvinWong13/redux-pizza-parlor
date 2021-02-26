import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector(store => store.checkout);

  const checkoutTotal = (checkout) => {
    let sum = 0;
    for (const pizza of checkout) {
      sum += Number(pizza.price);
    }
    return sum.toFixed(2);
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
    history.push('/')
}

  return(
    <header>
      {/* <button onClick{() => clearCart()}/></Link> */}
      <h1>Slender Slice of Heaven</h1>
      <div>
      Total: ${checkoutTotal(cart)}
      </div>
    </header>
  )
}

export default Header;