import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const inputuseRef= useRef(null)

// function chnagecolor (){
// inputuseRef.current.focus();
// }

   function submitwithotref(event){
       event.preventDefault()
       const user = document.querySelector("#name")
console.log("user")
   }
 function submitref(event){
    event.preventDefault()
    const refname =inputuseRef.current.value
console.log(refname)
 }

  return (
    <>
    {/* <button onClick={chnagecolor} >foucous</button>
    <input ref={inputuseRef}  type="text"  placeholder='Enter something' /> */}
    {/* .
    .
    .
    .
     .
    .
    .
    . */}
    {/* unControlled Components */}
    <form action="" method='post' onSubmit={submitwithotref} >
      <input type="text" id='name' placeholder='Enter name'/>
        <input type="text" id='pass' placeholder='Enter password'/>
        <button>Submit</button>
    </form>
    <br />
    <form action="" method='post' onSubmit={submitref} >
      <input type="text" ref={ inputuseRef} id='name' placeholder='Enter name'/>
        <input type="text" id='pass' placeholder='Enter password'/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default App
