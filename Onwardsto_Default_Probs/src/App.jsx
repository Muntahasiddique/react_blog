import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Checkboxes } from './checkboxes'
// import { Defaultprop } from './defaultprobs'
function App() {
  // to get input feild
  // const [val, setval] = useState("")
  {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Controlled Components */}
  // const [name, updateName] = useState("");
  // const [pass, updatePass] = useState("");
  // const [email, updateEmail] = useState("");
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
  return (
    <div>
 {/* <Defaultprop color="orange" >
  <h1>1st one</h1>
  </Defaultprop >

  <Defaultprop   >
    <h1  >hi, Muntaha</h1>
    </Defaultprop>

{/* own color */}
     {/* <Defaultprop   >
    <h1 style={{color:"red"}} >hi, Saliha</h1>
    </Defaultprop> */} 
{/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* to get input feild */}
    {/* <input type="text" value={val} onChange={(event)=>{
     setval(event.target.value)
    }}  placeholder='Type something to apper' />
 <h1>{val}</h1>*/}
   
{/* To clear */}
{/* <button onClick={()=>setval(" ")} >Clear something</button>  */}
{/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Controlled Components */}
 {/* <input 
        type="text" 
        onChange={(event) => updateName(event.target.value)}
        value={name}
        placeholder='Name' 
      />
      <input 
        type="text" 
        onChange={(event) => updatePass(event.target.value)}
        value={pass}
        placeholder='Password' 
      />
      <input 
        type="text" 
        onChange={(event) => updateEmail(event.target.value)}
        value={email}
        placeholder='Email' 
      />

    
      <h1>Name: {name}</h1>
      <h1>Password: {pass}</h1>
      <h1>Email: {email}</h1>
<button onClick={()=>{
  updateName("") ;updateEmail("");updatePass("")
}}   >Clear</button> */}
  {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* handle checkbox */}
<Checkboxes />
    </div>
  )
}

export default App
