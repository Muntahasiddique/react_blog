import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const inputuseRef= useRef(null)

function chnagecolor (){
inputuseRef.current.focus();
}
  return (
    <>
    <button onClick={chnagecolor} >foucous</button>
    <input ref={inputuseRef}  type="text"  placeholder='Enter something' />
    </>
  )
}

export default App
