import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import Userdetails from '../Components/Userdetails'

const Routing = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/User' element={<User/>}> 
          <Route path='/User/:name' element={<Userdetails/>} /> 
        </Route>
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  )
}

export default Routing
