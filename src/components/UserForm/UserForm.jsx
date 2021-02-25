function UserForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('in handleSubmit');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Street Address"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="Zip"></input>
        <label>
          <input type="radio" value="Delivery" name="deliveryType"></input>
          Delivery
        </label>
        <label>
          <input type="radio" value="Pickup" name="deliveryType"></input>
          Pickup
        </label>
        <button>Next</button>
      </form>
    </div>
  );
}

export default UserForm;
