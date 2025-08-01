import { useEffect } from "react"
export function ProbsHandlingUseeffect({counter,data}){

    useEffect(()=>{
  calldata()},[counter])

useEffect(()=>{
  callonece()},[])

function callonece() {
  console.log("call me")
}
function calldata() {
  console.log("call data")
}

    return(
        <>
        <h1>{counter}</h1>
<h1>{data}</h1>

        </>
    )
}