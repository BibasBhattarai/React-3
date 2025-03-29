import axios from '../Utils/Axios'
import React, { useEffect, useState } from 'react'


const Services = () => {
    const[first,setfirst]= useState("This is normal data")
    const[second,setsecond]= useState("This is large data")

    const getuser =()=>{
      
       
      axios.get("/users")
      .then(user=>{
        console.log(user)
                     
      })
      .catch(err=>console.log(err));
      
      
    }  



    useEffect(()=>{
        getuser();
      console.log("services is created")


        return()=>{
            console.log("service component is deleted")
        }

    },[second])

 

   
  return (
    <div>
      <h1>{first}</h1>
      <button className='p-1 bg-red-200 rounded-md' onClick={()=>setfirst("normal data has been changed")}>change first</button>

      <h1>{second}</h1>
      <button className='p-1 bg-red-200 rounded-md' onClick={()=>setsecond("large data has been changed")}>change first</button>
    </div>
  )
}

export default Services
