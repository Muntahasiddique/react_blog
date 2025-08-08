import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
export function UserList() {
  const [UserApi, setUserApi] = useState([])
  const [loader , setloader] =useState(false)
 const navigate = useNavigate();
  useEffect(()=>{
    setloader(true)
UserApitesting()
  },[])
  async function UserApitesting(){
     const URLAPI = "http://localhost:3000/users"
     let response =  await fetch(URLAPI);
      response = await response.json()
      setUserApi(response)
setloader(false)
  }
  async function DeleteApidata(id){
    const URLAPI = "http://localhost:3000/users"
    let response = await fetch(URLAPI+"/"+id ,{
      method :"delete"
    })
    response = await response.json();
    if(response){
alert("deleted")
    }
    UserApitesting()
 
  }
  function EditApiuser(id){
  navigate("/edit/" + id)
  }

  return (
    <>
    <h1>Fetch api using get method</h1>
    {!loader?
      UserApi &&  UserApi.map((item,index)=>(
     
        <ul key={index}>
          <li>
{item.name}
          </li>
          <li>
  {item.email}
          </li>
          <li>
              {item.age}
          </li>
          <li><button onClick={()=>DeleteApidata(item.id)} >Delete</button></li>
          <li><button onClick={()=>EditApiuser(item.id)} >Edit</button></li>
        

        </ul>
      ))
    :<h1>Data loading</h1>}
    </>
  )
}


