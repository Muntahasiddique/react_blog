import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const Colorstoget = JSON.parse(localStorage.getItem('key'))
 const [r,setr] = useState( Colorstoget  && Colorstoget.r?Colorstoget.r:0);
 const [g,setg] = useState( Colorstoget  && Colorstoget.g?Colorstoget.g:0);
   const [b,setb] = useState( Colorstoget  && Colorstoget.b?Colorstoget.b:0);
function Savehandle(){
  localStorage.setItem("key" , JSON.stringify({r,g,b}))
}
  // Clear localStorage and reset to white
  const clearStorage = () => {
    localStorage.removeItem("key"); // Remove the saved color
    setr(255); // Reset to white
    setg(255);
    setb(255);
  };


  return (
    <>
<div style={{backgroundColor:'rgb('+r+','+g+','+b+')',height:200,width:200 ,border:"1px solid black"}} >

</div>

    <label htmlFor="">Red</label>
  <input type="range" min={0} max={255} value={r} onChange={(event)=> setr(event.target.value) } />
     <label htmlFor="">Blue</label>
  <input type="range" value={b} onChange={(event)=>setb(event.target.value)} min={0} max={255}  />
     <label htmlFor="" >Green</label>
  <input type="range" min={0} max={255} value={g} onChange={(event)=>setg(event.target.value)} />
  <button onClick={Savehandle} >SAVE</button>
        <button onClick={clearStorage}>RESET TO WHITE</button>

    </>
  )
}

export default App
