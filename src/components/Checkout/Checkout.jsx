import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CheckoutItem from '../CheckoutItem/CheckoutItem'

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  // pull items from pizzaItem
  const pizzas = useSelector(store => store.checkout);
  const userInfo = useSelector(store => store.customerData)
  const checkoutTotal = (checkout) => {
    let sum = 0;
    for (const pizza of checkout) {
      sum += Number(pizza.price);
    }
    return sum.toFixed(2);
  }
  const emptyCheckout = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
    history.push('/')
  }

  return (
    <>
      <h2>Step 3: Checkout</h2>
        <div>
          <div id="customerInfo">
              <p><span>{userInfo.name}</span></p>
              <p><span>{userInfo.address}</span></p>
              <p>{userInfo.city}{userInfo.zip}</p>
          </div>
          <div>
            <span id="orderType">For Delivery</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map(pizza => {
                return(
                  <CheckoutItem key={pizza.id} pizza={pizza} />
                )
              })}
          </tbody>
        </table>
        <div>
          <span id="checkoutTotal">Total: ${checkoutTotal(pizzas)}</span>
        </div>
        {/* <button onClick{() => emptyCheckout()}>Checkout</button> */}
    </>
  )
}

export default Checkout;
