import PizzaItem from '../PizzaItem/PizzaItem';
import {useSelector} from 'react-redux';



function PizzaSelector() {

  const pizzaList = useSelector(store => store.pizzaList);

  return(
    <ul>
      {pizzaList.map(pizza => {
        return (
          <PizzaItem key={pizza.id} pizza={pizza}/>
        )
      })}
    </ul>
  )
}

export default PizzaSelector;