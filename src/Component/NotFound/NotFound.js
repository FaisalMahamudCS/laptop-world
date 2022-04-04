import React from 'react';
import './NotFound.css'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='pt-5 text-danger '>
       <nav className="navbar navbar-expand-lg navbar-light ">
       <NavLink
          className={({ isActive }) => (isActive ? "nav-link text-danger" : "nav-link text-dark")}
          to='/'
        >HOME
            </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
    </div>
  </div>
</nav>


            <div className=''>
          <h1> 404 Not Found</h1> 
          <p>Oops This page Doesn't exist</p>
          <NavLink to='/' className='btn btn-primary px-4'>Go Back</NavLink>
          </div>
        </div>
    );
};

export default NotFound;