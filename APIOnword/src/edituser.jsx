import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react"
export function EditUser() {
  const [name , setname] = useState('');
  const [email , setemail] = useState('');
  const [age, setage] = useState('');
const {id} = useParams()
useEffect(()=>{
getUserData()
},[])
async function getUserData()
{
    const url = "http://localhost:3000/users/"+id
    let response = await fetch(url)
    response = await response.json()

setname(response.name)
setage(response.age)
setemail(response.email)

}  return (
    <>
    <h1>Edit</h1>
    <input value={name} type="text " placeholder="Add name " />
  <br />
  <br />
   <input value={email} type="text " placeholder="Add email " />
  <br />
  <br />
   <input value={age} type="text " placeholder="Add age" />
  <br />
  <br />
  <button > Edit</button>
    
    </>)}