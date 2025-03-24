
// form handling by useref

// import React, { useRef} from 'react'

// function App() {
//   const name=useRef(null);
//   const age=useRef(null);
//   const email=useRef(null);
  
//   const handlesubmit=(event)=>{
//     event.preventDefault();
//     console.log(name.current.value,age.current.value,email.current.value)
//   }

//   return (
//     <div>
//     <form action="" onSubmit={handlesubmit}>
//       <input ref={name} type="text" placeholder='name' />
//       <input ref={age} type="text" placeholder='age' />
//       <input ref={email} type="text" placeholder='email' />
//       <input type="Submit" />
//     </form>
//     </div>
//   )
// }

// export default App




// Form handling controlled components


// import React, { useState } from 'react'

// function App() {
//   const [val,setval]=useState({name:"", email:""})
//   const handlesubmit=(event)=>{
//     event.preventDefault();
//     console.log(val);
//   }
//   return (
//     <div>

//     <form action="" onSubmit={handlesubmit}>
//       <input onChange={(event)=>setval({...val,name:event.target.value}) } type="text" placeholder='name' />
//       <input onChange={(event)=>setval({...val, email:event.target.value}) } type="email" placeholder='email' />

//       <input type="submit" />
//     </form>
      
//     </div>
//   )
// }

// export default App




// React hook form

// import React from 'react'
// import { useForm } from 'react-hook-form'

// function App() {
//   const{register,handleSubmit}= useForm();
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' />
//         <input {...register('email')} type="email" placeholder='email' />
//         <input type="submit"/>
        
//       </form>
//     </div>
//   )
// }

// export default App




// #form handling exercise


import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/form'


function App() {
  
  const [users,setusers] =useState([
    

  ])
  const handleformSubmitdata=(data)=>{
    setusers([...users,data])
  }

  const handleremove=(id)=>{
    setusers(()=>users.filter((item,index)=>index!=id))
  }

  return (
    <div className='bg-zinc-200 w-full h-screen flex justify-center items-center'>
    <div className='container mx-auto'>
      <Cards handleremove={handleremove} users={users}  />
      <Form handleformSubmitdata={handleformSubmitdata} />


    </div>
     

    </div>
  )
}

export default App
