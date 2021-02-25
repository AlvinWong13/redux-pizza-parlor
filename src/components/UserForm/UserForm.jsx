import { useState } from 'react';
import { useDispatch } from 'react-redux';

function UserForm() {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('in handleSubmit');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="">
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
