import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <nav className=''>
               <ul className='nav justify-content-center '>
               <NavLink
          className={({ isActive }) => (isActive ? "nav-link text-danger" : "nav-link text-dark")}
          to='/'
        >HOME
            </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "nav-link   text-danger" : "nav-link text-dark")}
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
               </ul>
           </nav>
        </div>
    );
};

export default Header;