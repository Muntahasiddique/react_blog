import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pageone } from './page1';
import { Pagetwo } from './page2';
// import './App.css';
import { Navigationbar } from './navbar';
import { Navigate } from 'react-router';
import { College } from './College';
import { Student } from '../Student';
import { Users } from './users';
import { UserDetails } from '../UserDetails';
function App() {
  return (
    <>


      <Routes>
       
      <Route element={<Navigationbar  />} >
      <Route path="user" >
           <Route path="/user" element={<Pageone />} />
     <Route path="/user/page" element={<Pagetwo />} />
      </Route>
      {/* user dynamic id */}
    <Route path="/Users/list?" element={<Users />} />
         <Route path="/Users/:id/:name?" element={<UserDetails/>} />



   <Route path="/" element={<Pageone />} />
     <Route path="/page" element={<Pagetwo />} />
</Route>
          <Route path="/college" element={<College />} >
          <Route  index element={<Student />} />
          </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <br />
      <br />
      {/* Tailwind testing */}
      <h1 class="text-3xl font-bold underline bg-red-700" >
    tailwind testing 
  </h1>
  </>
  );
}

export default App;