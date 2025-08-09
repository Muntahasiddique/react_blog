import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [Name , setName] = useState('')
    const [NameErr , setNameErr] = useState('')
  const [pass , setPass] = useState('')
  const [passErr , setpassErr] = useState('')
function HandleName(event){
  if(event.target.value.length>5){
      setNameErr("enter valid upto 5 chracters")
  }
  else{
    setNameErr('')
  }

}

function Handlepass(event){
let regex = /^[A-Z0-9]+$/i;
if(regex.test(event.target.value)){
      setpassErr('')
  }
  else{
    setpassErr("please valid alph or num only")
  }
}

  return (
    <>
    
      <input onChange={HandleName} type="text" placeholder='Enter your name' />
      <span  >
        {NameErr && NameErr}
      </span>
      <br />
      <br />
     <input onChange={Handlepass} type="text" placeholder='Enter password' />
      <span  >
        {passErr && passErr}
      </span>
      <br />
      <br />
     <button disabled={passErr || NameErr} >Login</button>
    
    </>
  )
}

export default App
