import React from 'react'
import DeleteAlluser from './DeleteAlluser'
const UserDetails = () => {
    const addNewUser=()=>{};
  return (
    <div>
        <div className='Conatiner'>
            <div className='search-bar' >
                <input type='text' placeholder='serch'/>
                <button onClick={()=>addNewUser()}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default UserDetails