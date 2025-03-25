import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate =useNavigate()
  const gobackbutton=()=>{
    // navigate("/")
    navigate(-1);
  }


  return (
    <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-5xl font-bold mb-5 text-red-200 bg-zinc-100'>About</h1>
      <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sequi ratione cumque libero modi neque perspiciatis debitis possimus saepe alias, ipsa magnam assumenda totam qui magni vitae molestiae praesentium. Doloribus?</p>
      <button onClick={gobackbutton} className='p-2 bg-zinc-200 rounded-md'>Go back</button>
  </div>
  )
}

export default About
