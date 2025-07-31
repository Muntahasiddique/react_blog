import { useState } from "react"

export function Checkboxes(){
 
        const [skills,setskills] = useState([])
        const handleskills=(event)=>{
         console.log(event.target.value , event.target.checked)
          if(event.target.checked){
            setskills([...skills, event.target.value])
          }
          else{
                 setskills([...skills.filter(item => item !== event.target.value)]);
          }
        
        }
        
    
return(
    <>
    <h1>Skills</h1>

    
    
    <input type="checkbox" onChange={handleskills} name="" id="checkphp" value="php"/>
    <label htmlFor="checkphp">PHP</label>
<br />
<br />
      <input type="checkbox" onChange={handleskills}  name="" id="checkjs" value="js"/>
    <label htmlFor="checkjs">js</label>
<br />
<br />
      <input type="checkbox"  onChange={handleskills}  name="" id="checkts" value="ts"/>
    <label htmlFor="checkts">ts</label>
<br />
<br />
      <input type="checkbox" onChange={handleskills}  name="" id="checknode" value="node"/>
    <label htmlFor="checknode">node</label>
    
    <h1>{skills.toString()}</h1>
    </>
)
}
