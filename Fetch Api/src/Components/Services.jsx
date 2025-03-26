import React, { useEffect } from 'react'

const Services = () => {

    useEffect(()=>{
        console.log("services is created")


        return()=>{
            console.log("service component is deleted")
        }

    })
  return (
    <div>
      Service
    </div>
  )
}

export default Services
