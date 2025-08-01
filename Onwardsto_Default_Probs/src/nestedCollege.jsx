import { NestedSTUDENT } from "./nestedinnerstudent";

export function NestedCollege({item}){
return(
    <>
    <h1>{item.name}</h1> 
 <ul>
  <li>
    <h3>{item.website}</h3>
  </li>
  <li>
    {item.students.map((student,index)=>(
      <li key={index}>
       <NestedSTUDENT  student={student} />
      </li>
    ))}
    <h3>{item.students.name}</h3>
  </li>
 </ul>
    </>
)
}
