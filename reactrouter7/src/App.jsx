import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pageone } from './page1';
import { Pagetwo } from './page2';
// import './App.css';
import { Navigationbar } from './navbar';
import { Navigate } from 'react-router';
import { College } from './College';
import { Student } from '../Student';

function App() {
  return (
    <>


      <Routes>
       
      <Route element={<Navigationbar  />} >
   <Route path="/" element={<Pageone />} />
     <Route path="/page" element={<Pagetwo />} />
</Route>
          <Route path="/college" element={<College />} >
          <Route  index element={<Student />} />
          </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  </>
  );
}

export default App;