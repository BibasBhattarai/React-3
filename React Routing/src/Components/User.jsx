import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-5xl font-bold mb-5 text-red-200 bg-zinc-100'>User</h1>
      {/* <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sequi ratione cumque libero modi neque perspiciatis debitis possimus saepe alias, ipsa magnam assumenda totam qui magni vitae molestiae praesentium. Doloribus?</p> */}
      {/* <button className='p-2 bg-zinc-200 rounded-md'>Explore</button>  */}

      <div className='w-1/2 flex flex-col mt-8'>
        <Link className='bg-red-100 p-3 text-2xl hover:bg-red-300 mb-3' to="/User/Messi">Messi</Link>
        <Link className='bg-red-100 p-3 text-2xl hover:bg-red-300 mb-3'  to="/User/Neymar">Neymar</Link>
        <Link className='bg-red-100 p-3 text-2xl hover:bg-red-300 mb-3'  to="/User/Suarez">Suarez</Link>
      </div>

        <Outlet/>     
      
  </div>
  )
}

export default User
