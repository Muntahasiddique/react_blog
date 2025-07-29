

import { useState } from "react";
export const Counter=()=>{
     const [count,UpdatedCOUNT]  = useState(0);
     const [rcount,rcountup] = useState(2)
const incrementCount=()=>{
   UpdatedCOUNT(count +1)
}

    return(
        <>
        <h1>Count{count} </h1>
        <h2>rcounter{rcount}</h2>
<button onClick={incrementCount} >Updatecount</button>
<button onClick={()=>rcountup(rcount-1)} >ReverseCount</button>
</>
    )
}
