import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [UserApi, setUserApi] = useState([])
  const [loader , setloader] =useState(false)
  useEffect(()=>{
    setloader(true)
UserApitesting()
  },[])
  async function UserApitesting(){
     const URLAPI = "https://dummyjson.com/users"
     let response =  await fetch(URLAPI);
      response = await response.json()
      setUserApi(response.users)
setloader(false)
  }

  return (
    <>
    <h1>Fetch api using get method</h1>
    {!loader?
      UserApi &&  UserApi.map((item,index)=>(
        <h3 key={index} >{item.firstName}</h3>
      ))
    :<h1>Data loading</h1>}
    </>
  )
}

export default App
