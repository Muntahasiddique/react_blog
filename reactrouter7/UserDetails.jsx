import { useParams } from "react-router";


export function UserDetails() {
  const parsmdata = useParams()
  return (
    <>
      <h1>UserDeyails</h1>
      <h3>{parsmdata.id}</h3>
   
    </>
  );
}                            