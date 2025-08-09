import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useState } from "react"
export function EditUser() {
  const [name , setname] = useState('');
  const [email , setemail] = useState('');
  const [age, setage] = useState('');
  const nevigate = useNavigate()
const {id} = useParams()
  const url = "http://localhost:3000/users/"+id
useEffect(()=>{
getUserData()
},[])
async function getUserData()
{
  
    let response = await fetch(url)
    response = await response.json()

setname(response.name)
setage(response.age)
setemail(response.email)

}  
async function UpdateEdit(){
let response = await fetch(url ,{
  method:"Put",
  body:JSON.stringify({
    name,
    age,
    email
  })} );
response = await response.json();
if(response){
  alert("edited")
nevigate('/')
}

}

return (
    <>
    <h1>Edit</h1>
    <input value={name}  onChange={(event)=>setname(event.target.value)} type="text " placeholder="Add name " />
  <br />
  <br />
   <input  onChange={(event)=>setemail(event.target.value)}  value={email} type="text " placeholder="Add email " />
  <br />
  <br />
   <input onChange={(event)=>setage(event.target.value)}  value={age} type="text " placeholder="Add age" />
  <br />
  <br />
  <button onClick={UpdateEdit} > Edit</button>
    
    </>)}