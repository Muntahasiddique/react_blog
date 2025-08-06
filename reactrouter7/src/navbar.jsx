import { Link, Outlet } from 'react-router-dom';
import './header.css'; // Regular CSS import (not module)

export function Navigationbar () {
  return (
    <>
    <header className="header">
      <div>
        <Link className="link" to="/">
          <h2 className="logo">Logo</h2>
        </Link>
      </div>
      <nav>
        <ul className="navList">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/page">Login</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
            <li>
            <Link className="link" to="/College">College</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  );
}

