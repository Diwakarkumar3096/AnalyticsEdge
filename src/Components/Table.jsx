import React from 'react'
import Table from 'react-bootstrap/Table';
const Tables = ({data}) => {
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>username</th>
          <th>email</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street},{item.address.suite},{item.address.suite},{item.address.suite},{item.address.suite}</td>
            <td>{item.phone}</td>
        
          </tr>
        ))}
      </tbody>
    </Table>
    </>
    
  )
}

export default Tables