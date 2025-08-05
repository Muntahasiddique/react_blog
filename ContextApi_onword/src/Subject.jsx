import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export  function SubjectComponent() {
  
  const subject = useContext(SubjectContext)
  return (
  
    <>
     <h1 style={{backgroundColor:'blue' , padding : 10}} >Subject is {subject}</h1>
    </>
  )
}