
import './App.css'
import Header from './Header'
function App() {
return(
<>
<Header />
<h1>
  My first component{sum()}
</h1>
<MyfIRST/>
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
export default App
