import { Link } from 'react-router-dom';

export function Pageone() {
  return (
    <>
      <h1>page 1</h1>
      <Link to="/page">Go to Page 2</Link>
    </>
  );
}