import React from 'react';
import './NotFound.css'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='pt-5 text-danger'>
            <div className=''>
          <h1> 404 Not Found</h1> 
          <p>Oops This page Doesn't exist</p>
          <NavLink to='/' className='btn btn-success px-4'>Go Back</NavLink>
          </div>
        </div>
    );
};

export default NotFound;