import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Defaultprop } from './defaultprobs'
function App() {
  const [val, setval] = useState("")

  return (
    <>
 <Defaultprop color="orange" >
  <h1>1st one</h1>
  </Defaultprop >

  <Defaultprop   >
    <h1  >hi, Muntaha</h1>
    </Defaultprop>


{/* own color */}
     <Defaultprop   >
    <h1 style={{color:"red"}} >hi, Saliha</h1>
    </Defaultprop>
 <h1>{val}</h1>

    <input type="text" value={val} onChange={(event)=>{
     setval(event.target.value)
    }}  placeholder='Type something to apper' />

   
{/* To clear */}
<button onClick={()=>setval(" ")} >Clear something</button>
    
    </>
  )
}

export default App
