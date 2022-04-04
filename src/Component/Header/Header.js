import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header '>


<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
  <div className=" ">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink
          className={({ isActive }) => (isActive ? "nav-link text-danger" : "nav-link text-dark")}
          to='/'
        >HOME
            </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "nav-link   text-danger " : "nav-link text-dark")}
          to='/review'
        >REVIEWS
            </NavLink>
            <NavLink
           className={({ isActive }) => (isActive ? "nav-link   text-danger" : "nav-link text-dark")}
          to='/dashboard'
        >DASHBOARD
            </NavLink>
            <NavLink
        className={({ isActive }) => (isActive ? "nav-link   text-danger" : "nav-link text-dark")}
          to='/blog'
        >BLOGS
            </NavLink>
            <NavLink
          className={({ isActive }) => (isActive ? "nav-link  text-danger" : "nav-link text-dark")}
          to='/about'
        >ABOUT
            </NavLink> 
      </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;