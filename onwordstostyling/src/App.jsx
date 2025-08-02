import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const originalStyle ={
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px"
  }
    const  [grid, setgridstyle]  = useState(true)
  const [cardStyle, setcardStyle] = useState({
    originalStyle
  }); // Added missing state

function changingcolor(){
setcardStyle({...cardStyle,backgroundColor:'blue'})
}
function originalcolor(){
setcardStyle({originalStyle})
}

  return (
    <div>
      <button onClick={changingcolor}  >Grey</button>
         <button onClick={originalcolor}  >Original</button>
          <button onClick={()=>setgridstyle(!grid)}  >Toggle</button>

    <h1 style={{ color: 'red' }}>Dynamic and Conditional Inline Style</h1>
    <div style={{ display:grid? 'flex':'block', flexWrap: 'wrap' }}>
      <div style={cardStyle}>
        <img 
          style={{ width: '200px' }} 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Profile"
        />
        <div style={{ padding: '5px' }}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
        <div style={cardStyle}>
        <img 
          style={{ width: '200px' }} 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Profile"
        />
        <div style={{ padding: '5px' }}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
        <div style={cardStyle}>
        <img 
          style={{ width: '200px' }} 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Profile"
        />
        <div style={{ padding: '5px' }}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
        <div style={cardStyle}>
        <img 
          style={{ width: '200px' }} 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Profile"
        />
        <div style={{ padding: '5px' }}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
        <div style={cardStyle}>
        <img 
          style={{ width: '200px' }} 
          src="https://www.w3schools.com/howto/img_avatar.png" 
          alt="Profile"
        />
        <div style={{ padding: '5px' }}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default App
