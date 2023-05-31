import React from 'react'
import DeleteAlluser from './DeleteAlluser'
const UserDetails = () => {
    const addNewUser=()=>{};
  return (
    <div>
        <div className='Conatiner'>
            <div className='admin-table' >
                <div className='admin-subtitle'><h1>List of User Details</h1></div>
                <button onClick={()=>addNewUser()}>Add User</button>
            </div>
            <ul>
                <li>Hii</li>
                <li>Hello</li>
            </ul>
          <hr/>
          <DeleteAlluser/>
        </div>
    </div>
  )
}

export default UserDetails