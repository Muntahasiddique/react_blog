   import { use } from 'react';
   export function UsersApi({UserResoure}){
          const UserData = use( UserResoure)  
      return(
        <>
       
 <h1>
    {
        UserData.users.map((user)=>(
            <h4>
                {
                    user.firstName
                }
            </h4>
        ))
    }
 </h1>
    
        
       
        </>
      )
    }