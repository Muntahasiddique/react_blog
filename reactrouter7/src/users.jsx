
import { Link } from "react-router";
export function Users() {
    const UserData=[
        {id:1 , name:"Muntaha"},
         {id:2, name:"Maim"},
          {id:3, name:"sami"},
           {id:4 , name:"ahmad"},
            {id:5, name:"umar"},
    ]
  return (
    <>
      <h1>List of users</h1>
      {
        UserData.map((item )=>(
            <div>
                <h4  > <Link to={"/Users/" + item.id} >{item.name}</Link> </h4>
            </div>
        ))
      }
     
   
    </>
  );
}                            