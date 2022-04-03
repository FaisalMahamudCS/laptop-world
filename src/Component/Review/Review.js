import React from 'react';
import useReviewFetch from '../../Hooks/useReviewFetch';
import Reviews from '../Reviews/Reviews';
const Review = () => {
 const [review,setReview]=useReviewFetch();
    return (
        <div>
           <div className="row">
       {
     review.map(review =><Reviews review={review}></Reviews>)
       }

           </div>
        </div>
    );
};

export default Review;