function Admin() {
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
        <tbody>{/* order info from db */}</tbody>
      </table>
    </div>
  );
}

export default Admin;
