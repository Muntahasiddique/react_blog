import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pageone } from './page1';
import { Pagetwo } from './page2';
import './App.css';
import { Navbar } from './navbar';

function App() {
  return (
    <>
  <Navbar />
      <Routes>
        
        <Route path="/" element={<Pageone />} />
        <Route path="/page" element={<Pagetwo />} />
      </Routes>
  </>
  );
}

export default App;