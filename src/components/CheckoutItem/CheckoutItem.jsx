import {useSelector} from 'react-redux';

function CheckoutItem({ pizza }) {
  const pizzaList = useSelector(store => store.pizzaList);
  const pizzaID = Number(pizza.id);

  const orderedPizza = pizzaList.filter(pie => 
    pie.id === pizzaID
  );

  return(
    <tr>
      <td>
        {orderedPizza[0].name}
      </td>
      <td>
        ${pizza.price}
      </td>
    </tr>
  )
}

export default CheckoutItem;