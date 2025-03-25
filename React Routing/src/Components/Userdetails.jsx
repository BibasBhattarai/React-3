import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
  const {name} = useParams();
    const Navigate= useNavigate();


  const Gobackhandler=()=>{
    console.log("go back")
    // Navigate("/User")    // to go to the user
    Navigate(-1);           // to go to the one stop back
  }
  
    return (
    <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-5xl font-bold mb-5 text-red-200 bg-zinc-100'>UserDetails</h1>
    <h1 className='text-xl font-semibold mt-4'>Hello {name}</h1>
      <button onClick={Gobackhandler} className='p-2 bg-red-200 rounded-md mt-4'>Go back</button>
  </div>
  )
}

export default Userdetails
