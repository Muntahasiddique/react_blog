import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { PassFunctions } from './passfunctions'
import { Userefun } from './useRef'
import { useFormStatus } from 'react-dom'
function App() {
  // PassFunasprop
//  function PassFunasprop(name){
//   alert(name)
//  }
// .
// .
// .
// .
// .
// .
// .
// .
// Fowrad Ref
// const inputref  = useRef(null)
// function Updateusingref(){
//   inputref.current.value ="10000"
// }
// .
// .
// .
// .
// .
// .
// .
// .
// { useFormStatus 
function FormComp (){
     const {pending} =useFormStatus();
  return(
    <>
  <input type="text " placeholder='enter' />
  <button disabled={pending}  >{pending ?'SUBMITTING':'SUBMIT' }  </button>
 
    </>
  )
  
}


async  function handlesubmit(){
  await new Promise(res =>setTimeout(res,5000))
}
  return (
    <>
      {/* // PassFunasprop */}
  {/* <PassFunctions PassFunasprop={PassFunasprop} name={"Muntaha"} /> */}
{/* // .
// .
// .
// .
// .
// .
// .
// . */}
  {/* // forwod ref */}
  {/* <h1>Fowraed ref</h1>
<Userefun  inputref={ inputref} Updateusingref={Updateusingref} /> */}

{/* // .
// .
// .
// .
// .
// .
// .
// . */}
{/* // Use FormStatus hook*/}
    <form action={handlesubmit}>
   
<FormComp />
</form>

    </>
  )
}

export default App
