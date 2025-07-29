
import './App.css'
import Header from './Header'
import { Animl,Apple  } from './assets/User'
import { MyParagarph } from './Exercise'
import { Name } from './jsx-insidehtml'
import { forjsx } from './jsx-insidehtml'
import { Operations } from './jsx-insidehtml'
import { Obj} from './jsx-insidehtml'
import { Counter } from './states'
function App() {
   const fruit=(ammm)=>{
alert("ammm")
  }
return(
<>

<Header />
<h1>
  My first component{sum()}
 
</h1>

<MyfIRST/>
<Animl/>
<MyParagarph/>
<Myname/>
  <button onClick={()=>fruit("Ammmm")} >utton</button>
<Counter />
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


function Myname(){
    const myobj =Obj();
  return(
<>
<h1>{Name}</h1>
<h1>{Name?Name:"uSERNOTFOUND"}</h1>
<h1>{forjsx()}</h1>
<h1>{Operations(10,20,"+")}</h1>
<h1>{myobj.name}
</h1>
</>
  )
  
}




export default App
