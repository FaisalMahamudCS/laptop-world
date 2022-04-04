import React from 'react';
import './Reviews.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Rating
    initialRating={rating}
    emptySymbol={<FontAwesomeIcon icon={faStar} />}
    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
    readonly
></Rating>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Reviews;