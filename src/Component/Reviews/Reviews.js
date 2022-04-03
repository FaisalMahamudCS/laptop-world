import React from 'react';
import './Reviews.css'

const Reviews = (props) => {
    const {id,name,rating,picture,description}=props.review;
    return (
        <div className=''>
            <div className="col ">
    <div className="card">
        <div className='pt-4'>
      <img src={picture}  className="card-img-top img" alt="..."/>
   </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Reviews;