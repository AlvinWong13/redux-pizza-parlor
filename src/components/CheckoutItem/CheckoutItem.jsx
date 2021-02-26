function CheckoutItem({ pizzas }) {
  return(
    <>
    <td>
      {pizzas.name}
    </td>
    <td>
      ${pizzas.price}
    </td>
    </>
  )
}

export default CheckoutItem;