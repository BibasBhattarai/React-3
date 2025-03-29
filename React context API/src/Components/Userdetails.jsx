import React, { useContext } from 'react'
import { Usercontext } from '../Context/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'


const Userdetails = () => {
    const {id}=useParams();
    const {user}=useContext(Usercontext)
    const navigate=useNavigate(); 
    // console.log(user[id])
    return (
    <div>
      <h1 className='text-4xl text-blue-800'>{user[id].name}</h1>
      <h1 className='text-2xl text-red-200'>{user[id].city}</h1>

      <button onClick={()=>navigate(-1)} className='px-2 pt-1 bg-red-200 rounded-md mt-5'> GO BACK</button>

    </div>
  )
}

export default Userdetails
