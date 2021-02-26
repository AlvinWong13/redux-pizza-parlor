import PizzaItem from '../PizzaItem/PizzaItem';
import {useSelector} from 'react-redux';



function PizzaSelector() {

  const pizzaList = useSelector(store => store.pizzaList);

  return(
    <div>
      {pizzaList.map(pizza => {
        return (
          <PizzaItem key={pizza.id} pizza={pizza}/>
        )
      })}
    </div>
  )
}

export default PizzaSelector;