import React from 'react';
import useReviewFetch from '../../Hooks/useReviewFetch';
import Reviews from '../Reviews/Reviews';
const Review = () => {
 const [review,setReview]=useReviewFetch();
    return (
        <div className='container pt-5'>
           <div className="row row-cols-1 row-cols-md-3  g-4">
       {
     review.map(review =><Reviews key={review.id} review={review}></Reviews>)
       }

           </div>
        </div>
    );
};

export default Review;