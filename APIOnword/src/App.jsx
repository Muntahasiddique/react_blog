import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [UserApi, setUserApi] = useState([])
  useEffect(()=>{
UserApitesting()
  },[])
  async function UserApitesting(){
     const URLAPI = "https://dummyjson.com/users"
     let response =  await fetch(URLAPI);
      response = await response.json()
      setUserApi(response.users)

  }

  return (
    <>
    <h1>Fetch api using get method</h1>
    {
      UserApi &&  UserApi.map((item)=>(
        <h3>{item.firstName}</h3>
      ))
    }
    </>
  )
}

export default App
