import { useRef ,useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { PassFunctions } from './passfunctions'
import { Userefun } from './useRef'
import { useFormStatus  } from 'react-dom'
// {/* Pure components */}
// let count=0;

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
// function FormComp (){
//      const {pending} =useFormStatus();
//   return(
//     <>
//   <input type="text " placeholder='enter' />
//   <button disabled={pending}  >{pending ?'SUBMITTING':'SUBMIT' }  </button>
 
//     </>
//   )
  
// }


// async  function handlesubmit(){
//   await new Promise(res =>setTimeout(res,5000))
// }
// .
// .
// .
// .
// .
// .
// .
// .
{/* // Use Transition hook*/}
// const [pending , startTransition] = useTransition()
// function handleform(){
//   startTransition( async ()=>{
//  await new Promise(res=>setTimeout(res ,3000))
//   }  )
 
//  }
{/* Pure components */}



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
    {/* <form action={handlesubmit}>
   
<FormComp />
</form> */}
{/* // .
// .
// .
// .
// .
// .
// .
// . */}
{/* // Use Transition hook*/}
{/* <button disabled={pending} onClick={handleform} >Submit</button>
{pending?<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"alt="" />  :null
} */}
{/* // .
// .
// .
// .
// .
// .
// .
// . */}
{/* Pure components */}
<Cup  count={3 }/>
    </>
  )
}
function Cup(){
   count = count + 2
return(
 
  <h1>guetes are {count} AND {count }</h1>
)
}
export default App
