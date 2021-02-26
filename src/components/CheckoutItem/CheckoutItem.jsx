import {useSelector} from 'react-redux';

function CheckoutItem({ pizza }) {
  const pizzaList = useSelector(store => store.pizzaList);

  console.log('Pizza List', pizzaList);
  console.log('current pizza', pizza)

  const pizzaID = Number(pizza.id);

  const orderedPizza = pizzaList.filter(pie => 
    pie.id === pizzaID
  );

  console.log('Ordered Pizza:', orderedPizza)

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