import React from 'react'
import Card from './Card'
function Cards({users,handleremove}) {
  return (
    <div className='w-full p-4 flex justify-center max-h-96 gap-4 overflow-auto flex-wrap'>
     {users.map((item,index)=>{
     return <Card handleremove={handleremove} users={item} key={index} id={index} />
     })}
     
    </div>
  )
}

export default Cards
