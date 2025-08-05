import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { CollegeComponent } from './College'
// import { SubjectComponent } from './Subject'
// import { ClassComponent } from './ClassComponent'
// import { SubjectContext } from './ContextData'
import { useCustomHookToggle } from './useToggle'
function App() {
  // const [subject , setsubject] = useState('English')
{/* ............
  ..........
  ............
  ................
   ..........
  ............
  ................
  ............. */}
  {/* Custom hook */}
  const [value,toggleValue] =useCustomHookToggle(true)
    const [data,setdata] =useCustomHookToggle(true)
  return (
    <>
    {/* <SubjectContext.Provider value={subject} >
      <select  value={subject} name="" id="" onChange={(event)=>setsubject(event.target.value)}> select subject
        <option value=""> select subject</option>
        <option value="English">English</option>
         <option value="Science">Science</option>
          <option value="Bio">Bio</option>
           <option value="Math">Math</option>
      </select>
        <h1>Context Api</h1>
   <CollegeComponent />
     <ClassComponent />
     <SubjectComponent />
    </SubjectContext.Provider>
   
  <button onClick={()=>setsubject('')} >Clear</button> */}
  {/* ............
  ..........
  ............
  ................
   ..........
  ............
  ................
  ............. */}
  {/* Custom hook */}
  <button onClick={toggleValue} >Toggle </button>
  <button onClick={()=>toggleValue(false)} > Hide</button>
  <button onClick={()=>toggleValue(true)} > Show</button>
  {
   value? <h1>Custom hook to toggle</h1> :null
  }
  <hr />
   <button onClick={setdata} >Toggle 2nd heading</button>
  <button onClick={()=>setdata(false)} > Hide</button>
  <button onClick={()=>setdata(true)} > Show</button>
  {
   data? <h1>Custom hook to toggle for 2nd heading</h1> :null
  }

    </>
  )
}

export default App
