import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import user from './user'
function App() {
  const [counter,setCounter] = useState(0);
return <>
<h1>Counter Val:{counter}</h1>
<h1>react Componenet</h1>
<user/>
<button onClick={()=>setCounter(counter+1)} >increase Counter Value</button>
</>
  
}

export default App
