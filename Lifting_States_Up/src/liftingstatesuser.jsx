
export function LiftingStatesUser({setUser}){
  
    return(
<>

    <input type="text"  onChange={(event)=>setUser(event.target.value)} name="" id="" placeholder="Enter name " />
   
    </>

    )
}