
export function ReuseComponents({userdata}){
return(
    <div style={{border:"1px solid black"}} >
        <h1>user name: <span style={{color:"purple"}} > {userdata.name}</span></h1>
         <h1>user name: <span style={{color:"purple"}} > {userdata.rollno}</span></h1>
          <h1>user name: <span style={{color:"purple"}} > {userdata.id}</span></h1>
    </div>
)
}