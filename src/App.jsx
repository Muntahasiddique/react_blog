import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Animl,Apple  } from './assets/User'
import { MyParagarph } from './Exercise'
import { Name } from './jsx-insidehtml'
import { forjsx } from './jsx-insidehtml'
import { Operations } from './jsx-insidehtml'
import { Obj} from './jsx-insidehtml'
import { Counter } from './states'
import { Toggling } from './hideandshow'
function App() {
//    const fruit=(ammm)=>{
// alert("ammm")
//   }
 const [display,setDisplay] = useState(1)
return(
<>
{/* // <Header />
// <h1>
//   My first component{sum()}
 
// </h1>

// <MyfIRST/>
// <Animl/>
// <MyParagarph/>
// <Myname/>
//   <button onClick={()=>fruit("Ammmm")} >utton</button>
// <Counter /> */}
{/* <button onClick={()=>{
  setDisplay(!display)
}} >toggle</button>
{display? <Toggling />:null} */}





{/* multiple conditions */}
<h1>{display}</h1>
<button onClick={()=>setDisplay(display+1)} >Counter</button>
{
  display==1?<h1>CON1</h1>
  :display==2?<h1> CON2 </h1>
  :display==3?<h1> CON3 </h1>
  :display==4?<h1> CON4 </h1>
  :display==5?<h1> CON5 </h1>
  :<h1>other </h1>
}
</>
)  
}

// function MyfIRST(){
//   return(
//     <>
//     <h1>mY First</h1>
//     </>
//   )
// }
// function sum(){
//   return (2+3);
// }
// function Sum1(){
//   let Num =2;
//   let Num2 = 3;
//   return(
//   <>
//     <h1>{Num * Num2}</h1>
//     </>
//   );
// }


// function Myname(){
//     const myobj =Obj();
//   return(
// <>
// <h1>{Name}</h1>
// <h1>{Name?Name:"uSERNOTFOUND"}</h1>
// <h1>{forjsx()}</h1>
// <h1>{Operations(10,20,"+")}</h1>
// <h1>{myobj.name}
// </h1>
// </>
//   )
  
// }




export default App
