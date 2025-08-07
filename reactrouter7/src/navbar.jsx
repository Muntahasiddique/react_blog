import { Link, NavLink, Outlet } from 'react-router-dom';
import './header.css'; // Regular CSS import (not module)

export function Navigationbar () {
  return (
    <>
    <header className="header">
      <div>
        <NavLink  className={(isActive)=> isActive?'Customactive link':'link'} to="/">
          <h2 className="logo">Logo</h2>
        </NavLink>
      </div>
      <nav>
        <ul className="navList">
          <li>
            <NavLink className="link" to="/user/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/user/page">Login</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">About</NavLink>
          </li>
            <li>
            <NavLink className="link" to="/College">College</NavLink>
          </li>
           <li>
            <NavLink className="link" to="Users">Users</NavLink>
          </li>
            <li>
            <NavLink className="link" to="Users/list">Userslist</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  );
}

