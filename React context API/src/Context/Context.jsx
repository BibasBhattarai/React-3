import React, { createContext, useState } from 'react'


export const Usercontext=createContext();
const Context = (props) => {
  const [user,setuser]=useState([
    {id:0, name:"messi",city:"Miami"},
    {id:1, name:"pedri",city:"barcelona"},
    {id:2, name:"yamal",city:"kathmandu"},
]
 

  )
  
    return <Usercontext.Provider value={{user,setuser}}>{props.children}</Usercontext.Provider>
    
  
}

export default Context
