import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NestedCollege } from './nestedCollege';
// import { Checkboxes } from './checkboxes'
// import { Defaultprop } from './defaultprobs'
// import { ReuseComponents } from './reusecomponents'
// import { Clockprop } from './taskClock'
function App() {
  // to get input feild
  // const [val, setval] = useState("")
  {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Controlled Components */}
  // const [name, updateName] = useState("");
  // const [pass, updatePass] = useState("");
  // const [email, updateEmail] = useState("");
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
// radio buttons
// const [gender, setgender] = useState("male");
// const [city, setcity] = useState("");
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* loops in jsx */}
// const Userdata =[
//   {
//     name: 'muntha',
//     rollno:23,
//     id:1
//   },
//     {
//     name: 'mhgf',
//     rollno:24,
//     id:2
//   },
//     {
//     name: 'muntha',
//     rollno:23,
//     id:3
//   },
//     {
//     name: 'muntha',
//     rollno:23,
//     id:4
//   }
// ]
   {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* making clock */}
// const [color, setcolor] = useState("red")
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Nested in jsx */}
const CollegeData = [
  {
    name: "Oxford University",
    website: "https://www.ox.ac.uk",
    students: [
      {
        name: "John Doe",
        rollno: 101,
        id: 1
      },
      {
        name: "Jane Smith",
        rollno: 102,
        id: 2
      },
      {
        name: "Alice Johnson",
        rollno: 103,
        id: 3
      }
    ]
  },
  {
    name: "Harvard University",
    website: "https://www.harvard.edu",
    students: [
      {
        name: "Robert Brown",
        rollno: 201,
        id: 4
      },
      {
        name: "Emily Davis",
        rollno: 202,
        id: 5
      },
      {
        name: "Michael Wilson",
        rollno: 203,
        id: 6
      }
    ]
  },
  {
    name: "Stanford University",
    website: "https://www.stanford.edu",
    students: [
      {
        name: "Sarah Miller",
        rollno: 301,
        id: 7
      },
      {
        name: "David Taylor",
        rollno: 302,
        id: 8
      },
      {
        name: "Laura Anderson",
        rollno: 303,
        id: 9
      }
    ]
  }
];
  return (
    <div>
 {/* <Defaultprop color="orange" >
  <h1>1st one</h1>
  </Defaultprop >

  <Defaultprop   >
    <h1  >hi, Muntaha</h1>
    </Defaultprop>

{/* own color */}
     {/* <Defaultprop   >
    <h1 style={{color:"red"}} >hi, Saliha</h1>
    </Defaultprop> */} 
{/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* to get input feild */}
    {/* <input type="text" value={val} onChange={(event)=>{
     setval(event.target.value)
    }}  placeholder='Type something to apper' />
 <h1>{val}</h1>*/}
   
{/* To clear */}
{/* <button onClick={()=>setval(" ")} >Clear something</button>  */}
{/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Controlled Components */}
 {/* <input 
        type="text" 
        onChange={(event) => updateName(event.target.value)}
        value={name}
        placeholder='Name' 
      />
      <input 
        type="text" 
        onChange={(event) => updatePass(event.target.value)}
        value={pass}
        placeholder='Password' 
      />
      <input 
        type="text" 
        onChange={(event) => updateEmail(event.target.value)}
        value={email}
        placeholder='Email' 
      />

    
      <h1>Name: {name}</h1>
      <h1>Password: {pass}</h1>
      <h1>Email: {email}</h1>
<button onClick={()=>{
  updateName("") ;updateEmail("");updatePass("")
}}   >Clear</button> */}
  {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* handle checkbox */}
{/* <Checkboxes /> */}
  {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* radioButtons and drop down */}
{/* <input type="radio" onChange={(event)=>{
  setgender(event.target.value)
}} name="gender" value={"male"} id="male" checked={gender === "male"} />
<label htmlFor="male">Male</label>
<br /><br />
<input type="radio" name="gender" onChange={(event)=>{
  setgender(event.target.value)
}}  value={"female"} id="female" checked={gender === "female"} />
<label htmlFor="female">feMale</label>
<h1>{gender}</h1>

<h1>select city</h1>
<select defaultValue={"fsd"} name="city" id="city" onChange={(event)=>{
setcity(event.target.value)
}} >
  <option value="lhr">Lhr</option>
    <option value="isb">isb</option>
      <option value="fsd">fsd</option>
</select>

<h2>selected city {city}</h2> */}
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* loops in jsx */}
{/* <h1>Loops in jsx</h1>
<table border="1">
  <thead>
    <tr>
      <td>name</td>
      <td>rollno</td>
      <td>id</td>
    </tr>
  </thead>
  <tbody>
    {Userdata.map((item)=>(
     <tr key={item.id} >
      <td>{item.name}</td>
      <td>{item.rollno}</td>
      <td>{item.id}</td>
     </tr>
    ))}
  </tbody>
</table> */}
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Reuse Component in loop */}

{/* {
  Userdata.map((item)=>(
    <div key={item.id} >
<ReuseComponents userdata={item} />
</div>
  ))

} */}
    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* making clock */}
{/* <select name="" id="" onChange={(event)=>
  setcolor(event.target.value)
} >
  <option value={"red"}>Red</option>
  <option value={"Blue"}>Blue</option>
  <option value={"purple"}>Purple</option>
</select>
<br />
<br />
<br />
<br />
<Clockprop color={color} /> */}

    {/* .
.
.
. 
.
.
.
.
.
.
*/}
{/* Nested looping */}
{
   CollegeData.map((item,index)=>(
   <div key={index} >
  <NestedCollege item={item}  />

</div>
   ))

}


    </div>
  )
}

export default App
