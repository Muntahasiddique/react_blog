import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { LiftingStatesDisplayUser } from './liftigstatesDisplayUser'
// import { LiftingStatesUser } from './liftingstatesuser'

function App() {
  // const [user , setUser] = useState('')
// .
// .
// .
// .
// .
// .
// {/* updatingobjects in states */}
const [data,setdata] = useState({
  name : 'Muntaha',
  Adress :{
  city:'Fsd'
  }
})
// New array state
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'}
  ])
function HandleName(val){
data.name = val;
setdata({...data})
}
function Handlecity(valu){
data.Adress.city = valu;
setdata({...data,Adress:{...data.Adress ,city: valu}})
}
// for Array
function HandleArrayName(val){
items[items.length-1].name = val;
setItems([...items])
}

  return (
    <>
    {/* <LiftingStatesDisplayUser user={user} />
    <LiftingStatesUser setUser={setUser} /> */}
{/* 
.
.
.
.
.
. 
*/}
{/* updatingobjects in states */}
 <input type="text"  onChange={(event)=>HandleName(event.target.value)}  name="" id=""  placeholder='Enter name'/>
  <input type="text"  onChange={(event)=>Handlecity(event.target.value)}  name="" id=""  placeholder='Enter city'/>
 <h1>{data.name}</h1>
 <h1>{data.Adress.city}</h1>
 {/* for array */}
 <h1>Array with obj</h1>
  <input type="text"  onChange={(event)=>HandleArrayName(event.target.value)}  name="" id=""  placeholder='Enter name'/>
  {
    items.map((arrayitem , index)=>(
       <h3 key={index} >
          {arrayitem.name}
       </h3>
    ))
  }
    </>
  )
}

export default App
