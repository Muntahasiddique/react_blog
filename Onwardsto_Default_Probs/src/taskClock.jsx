import { useEffect,useState } from "react";

export function Clockprop({color}) {
const [time , setTime] = useState(0)
       
            useEffect(()=>{
// setintervel(Date,sec)
            setInterval(()=>{
setTime(new Date().toLocaleTimeString())
            },1000 )
        },[])
         
        return(          
    <div>
         <h1 style={{color:color}} >
           {time}
         </h1>
    </div>
)
}