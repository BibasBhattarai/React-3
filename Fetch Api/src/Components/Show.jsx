import axios from 'axios'
import React, { useState } from 'react'

const Show = () => {
  
    const[products,setproducts]= useState([])
    
    const getproduct =()=>{
      const api ="https://fakestoreapi.com/products"
       
      axios.get(api)
      .then(response=>{
        // console.log(response)
      setproducts(response.data)                  // this means the productsin state will contain the data of response.data
      })
      .catch(err=>console.log(err));
      
      
    }  
    return (
    <>
       <button onClick={getproduct} className='px-2 py-1 bg-red-500 rounded-md'>
        click 
      </button>
    
        <ul>
        {products.length>0?products.map((p)=><li key={p.id} className=' bg-red-100 mb-5'>{p.title}</li>):<h1>Loading...</h1>}
      </ul>
        


    </>
    
  )
}

export default Show
