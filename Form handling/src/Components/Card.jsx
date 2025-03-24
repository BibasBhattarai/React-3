import React from 'react'


function Card({users,handleremove,id}) {
  return (
    
    
      <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-3'>
        <div className='image w-[3vw] h-[3vw] rounded-full overflow-hidden bg-zinc-200'>
            <img className='w-full h-full object-cover' src={users.image} alt="" />
            
        </div>
        <h1 className=' mt-1 text-xl font-semibold'>{users.name}</h1>
        <h4 className='opacity-60 text-xs font-semibold'>{users.email}</h4>
        <p className=' mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, adipisci.</p>
        <button onClick={()=>handleremove(id)} className='px-3 py-1 text-xs rounded-full font-semibold mt-4 text-white bg-red-700'>Remove it</button>
    </div>
    
  
  )
}

export default Card
