import axios from 'axios'
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Show from './Components/Show'
import Home from './Components/Home'
import Services from './Components/Services'

const App = () => {


  return (  
    <div className='p-4 '>
      <nav className='flex justify-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>

      </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/show' element={<Show/>} />
        </Routes>
      
    </div>
  )
}

export default App
