

function PizzaSelector({pizzaList}) {

  return(
    <ul>
      {pizzaList.map(pizza => {
        return (
          <li>
            {pizza.name}
          </li>
        )
      })}
    </ul>
  )
}

export default PizzaSelector;