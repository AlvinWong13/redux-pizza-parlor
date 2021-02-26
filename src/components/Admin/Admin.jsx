import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import './Admin.css';

function Admin() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getPastOrders();
  }, []); // end useEffect

  // axios call to pull in old orders from db
  const getPastOrders = () => {
    axios
      .get('/api/order')
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => {
        console.log('Error in Past Order GET', err);
      });
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{moment(order.time).format('l [at] LT')}</td>
                <td>{order.type}</td>
                <td>${order.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
