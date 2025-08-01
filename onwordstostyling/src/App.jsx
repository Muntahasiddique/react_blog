import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const cardStyle = {
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px"
  };

  return (
    <>
    <h1 style={{ color: 'red' }}>Vite + React</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <img 
            style={{ width: '200px' }} 
            src="https://www.w3schools.com/howto/img_avatar.png" 
            alt="Avatar"
          />
          <div style={{ padding: '5px' }}>
            <h4>Anil Sidhu</h4>
            <button onClick={() => setCount((c) => c + 1)}>
              Count: {count}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
