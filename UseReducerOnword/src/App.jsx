import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const UseData = {
  name :'',
  password:'',
  Email:'',
  City:''

}
function reducerfunc(data,action){
return{...data,[action.type]:action.val}
}
function App() {
 const [state , dispatch] = useReducer(reducerfunc,UseData);

  return (
    <>
   <form action="">
    <input onChange={(event)=>dispatch({val:event.target.value,type:'name'})}  type="text" placeholder='name' />
     <input  onChange={(event)=>dispatch({val:event.target.value,type:"password"})}  type="text" placeholder='password' />
      <input onChange={(event)=>dispatch({val:event.target.value,type:"email"})}  type="text" placeholder='Email' />
       <input  onChange={(event)=>dispatch({val:event.target.value,type:"city"})}  type="text" placeholder='city' />
       <button >add details</button>
         <li>name:{state.name}</li>
          <li>pass:{state.password}</li>
           <li>city:{state.city}</li>
            <li>email:{state.email}</li>
   </form>

    </>
  )
}

export default App
