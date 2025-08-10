import { lazy, Suspense, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Lazyloadcomp= lazy(()=>import('./Lazyloadcomp'))
//.
// .
// .
// .
// .
// .
// .
// .
// .
// .
//  use reducer 
// const UseData = {
//   name :'',
//   password:'',
//   Email:'',
//   City:''

// }
// function reducerfunc(data,action){
// return{...data,[action.type]:action.val}
// }
function App() {

//  const [state , dispatch] = useReducer(reducerfunc,UseData);
//.
// .
// .
// .
// .
// .
// .
// .
// .
// .
// LazyLoading
const [load , setLoad] = useState(false)
  return (
    <>
   {/* <form action="">
    <input onChange={(event)=>dispatch({val:event.target.value,type:'name'})}  type="text" placeholder='name' />
     <input  onChange={(event)=>dispatch({val:event.target.value,type:"password"})}  type="text" placeholder='password' />
      <input onChange={(event)=>dispatch({val:event.target.value,type:"email"})}  type="text" placeholder='Email' />
       <input  onChange={(event)=>dispatch({val:event.target.value,type:"city"})}  type="text" placeholder='city' />
       <button >add details</button>
         <li>name:{state.name}</li>
          <li>pass:{state.password}</li>
           <li>city:{state.city}</li>
            <li>email:{state.email}</li>
   </form> */}
   {/* .
.
.
.
.
.
.
.
. */}
{/* Lazy loading */}

{
  load? <Suspense fallback={<h3>Loading....</h3>} > <Lazyloadcomp/> </Suspense>:null
}
<button onClick={()=>setLoad(true)} >Load cOMP</button>
    </>
  )
}

export default App
