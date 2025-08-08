import { useState } from "react"
export function Useradd() {
 const [name , setname] = useState('');
 const [email , setemail] = useState('');
 const [age, setage] = useState('');
async function PostApiUser() {
 
    let response = await fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        age
      })
    });
    response = await response.json();
    if(response){
alert("new user added")
    }

  }
  return (



    <>
  <h1> User add </h1>
  <input onChange={(event)=>setname(event.target.value)} type="text " placeholder="Add name " />
  <br />
  <br />
   <input onChange={(event)=>setemail(event.target.value)} type="text " placeholder="Add email " />
  <br />
  <br />
   <input onChange={(event)=>setage(event.target.value)} type="text " placeholder="Add id " />
  <br />
  <br />
  <button onClick={PostApiUser} >Add user</button>
    </>
  )
}