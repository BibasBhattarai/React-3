import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className='mt-10 flex justify-center gap-6'>
            <NavLink style={(e)=>{
                return{
                    color:e.isActive ?"tomato":"",   
                    fontWeight:e.isActive ?"bold":"",
                }
            }} to="/">Home</NavLink>

            <NavLink to="/User"> 
            {(e)=>{
                return <span className={[
                    e.isActive?"text-red-300":"",
                    e.isActive? "font-bold":"",
                ].join(" ")}> User</span>
            }}
            </NavLink>
            
            <NavLink className={(e)=>{
                return [
                    e.isActive?"text-red-300":"",
                    e.isActive? "font-bold":"",
                ].join(" ");
            }} to="/About">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
