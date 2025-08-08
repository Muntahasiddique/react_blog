
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './UserList'
import { Useradd } from './USERaDD.JSX'
import { NavLink, Route, Router, Routes } from 'react-router'
import { EditUser } from './EDITUSER.JSX'


function App() {
 

  return (
    <>
 
<ul>
  <li>
    <NavLink to="/" >
home
    </NavLink>
     <NavLink to="add" >
Add user
    </NavLink>
  </li>
</ul>
<Routes>
  <Route path ="/" element={   <UserList />} />
    <Route path ="/add" element={   <Useradd/>} />
    <Route path ="/edit/:id" element={   <EditUser/>} />
</Routes>
    </>
  )
}

export default App
