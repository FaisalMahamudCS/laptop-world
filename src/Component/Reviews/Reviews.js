import React from 'react';

const Reviews = (props) => {
    const {id,name,rating,picture,description}=props.review;
    return (
        <div className='col-4'>
            {id}
            {name}
        </div>
    );
};

export default Reviews;