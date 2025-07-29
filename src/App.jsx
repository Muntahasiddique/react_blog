
import './App.css'
import Header from './Header'
import { Animl,Apple  } from './assets/User'
import { MyParagarph } from './Exercise'
function App() {
return(
<>
<Header />
<h1>
  My first component{sum()}
</h1>
<MyfIRST/>
<Animl/>
<MyParagarph/>
</>
)  
}

function MyfIRST(){
  return(
    <>
    <h1>mY First</h1>
    </>
  )
}
function sum(){
  return (2+3);
}
function Sum1(){
  let Num =2;
  let Num2 = 3;
  return(
  <>
    <h1>{Num * Num2}</h1>
    </>
  );
}
export default App
