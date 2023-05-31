import React from 'react'

const Table = ({data}) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>username</th>
          <th>email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            
        
          </tr>
        ))}
      </tbody>
    </table>
    </>
    
  )
}

export default Table