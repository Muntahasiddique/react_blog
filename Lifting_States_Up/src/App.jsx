import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LiftingStatesDisplayUser } from './liftigstatesDisplayUser'
import { LiftingStatesUser } from './liftingstatesuser'

function App() {
  const [user , setUser] = useState('')

  return (
    <>
    <LiftingStatesDisplayUser user={user} />
    <LiftingStatesUser setUser={setUser} />
    </>
  )
}

export default App
