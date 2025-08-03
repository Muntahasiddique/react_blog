import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { PassFunctions } from './passfunctions'
import { Userefun } from './useRef'
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
const inputref  = useRef(null)
function Updateusingref(){
  inputref.current.value ="10000"
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
  <h1>Fowraed ref</h1>
<Userefun  inputref={ inputref} Updateusingref={Updateusingref} />

    </>
  )
}

export default App
