import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CollegeComponent } from './College'
import { SubjectComponent } from './Subject'
import { ClassComponent } from './ClassComponent'
import { SubjectContext } from './ContextData'

function App() {
  const [subject , setsubject] = useState('English')

  return (
    <>
    <SubjectContext.Provider value={subject} >
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
   
  <button onClick={()=>setsubject('')} >Clear</button>
    </>
  )
}

export default App
