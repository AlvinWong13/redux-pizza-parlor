import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [newType, setNewType] = useState('');

  const clearInputs = event =>{
    setNewName('');
    setNewAddress('');
    setNewCity('');
    setNewZip('');
    setNewType(false);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const customerInfo = {
      name:  newName,
      address: newAddress,
      city: newCity,
      zip: newZip,
      type: newType,
    };

    dispatch({
      type: 'ADD_CURRENT_CUSTOMER',
      payload: customerInfo,
    });

    history.push('/checkout');
    clearInputs();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(evt) => setNewName(evt.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Street Address"
          value={newAddress}
          onChange={(evt) => setNewAddress(evt.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="City"
          value={newCity}
          onChange={(evt) => setNewCity(evt.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Zip"
          value={newZip}
          onChange={(evt) => setNewZip(evt.target.value)}
          required
        ></input>
        <label>
          <input
            type="radio"
            value="Delivery"
            name="deliveryType"
            onChange={(evt) => setNewType(evt.target.value)}
            required
          ></input>
          Delivery
        </label>
        <label>
          <input
            type="radio"
            value="Pickup"
            name="deliveryType"
            onChange={(evt) => setNewType(evt.target.value)}
            required
          ></input>
          Pickup
        </label>
        <button>Next</button>
      </form>
    </div>
  );
}

export default UserForm;
