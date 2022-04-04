import React from 'react';
import './NotFound.css'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='pt-5 text-danger  container'>
       

 <div className='row '>
            <div className='col-lg-6 pt-6'>
          <h1> 404 Not Found</h1> 
          <p>Oops This page Doesn't exist</p>
          <NavLink to='/' className='btn btn-primary px-4'>Go Back</NavLink>

          </div>
          <div  className='col-lg-6'>
          <img className='img-fluid' src="https://icon-library.com/images/mistake-icon/mistake-icon-3.jpg" alt="" srcset="" />
        </div>
        </div>
        </div>
    );
};

export default NotFound;