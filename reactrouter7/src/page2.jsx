import { Link } from 'react-router-dom';

export function Pagetwo() {
  return (
    <>
      <h1>page 2</h1>
      <Link to="/">Go back to Page 1</Link>
    </>
  );
}