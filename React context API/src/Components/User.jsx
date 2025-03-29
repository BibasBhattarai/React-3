import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../Context/Context'


const User = () => {
  
  const {user,setuser}=useContext(Usercontext)
  
    return (
    <div>
      <h1 className='text-2xl '>Userlist</h1>
      <div className='mt-10 flex flex-col gap-2'>
      {user.map((u)=>(

        <Link key={u.id} to={`/user/${u.id}`} className='bg-red-200 p-2 rounded-md'>{u.name}</Link>  // The to={user/${u.id}} → Creates a link that navigates to /user/0, /user/1, etc., based on each user’s id.
      )
        
      )}
        
      </div>
       
      
    </div>
  )
}   

export default User
