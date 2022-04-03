import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div>
        <div className='container mt-5'>
           <div className="row">
               <div className="col-lg-7">
         <h1 className='head-text'>The Best Laptop</h1><br />
         <h1 className='head-text text-danger'>With Best Speed and Performance</h1>
         <p>THis asus laptop is the best .It give you best service.
            we provide best service after sells .So the product has warranty
        </p>
        <button className='btn btn-light'>Demo</button>
               </div>
               <div className='col-lg-5'>
               <img className='img-fluid' src="https://sc04.alicdn.com/kf/H781f8f65e0d34e9291b93164832bd0879.jpg" alt="" srcset="" />
               </div>
               </div> 
        </div>
       
        </div>
    );
};

export default Home;