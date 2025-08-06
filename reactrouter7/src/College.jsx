
import { Outlet } from "react-router";
import { Link,NavLink } from "react-router";
export function College() {
  return (
    <>
      <h1>College</h1>
    
     <NavLink to="student" >Student</NavLink>
<Outlet />
    </>
  );
}                            