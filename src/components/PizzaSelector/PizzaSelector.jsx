import PizzaItem from '../PizzaItem/PizzaItem'

function PizzaSelector({pizzaList}) {

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