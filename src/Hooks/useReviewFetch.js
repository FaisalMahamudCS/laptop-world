import { useEffect, useState } from "react"
const useReviewFetch =()=>{
    const [review,setReview]=useState([])
    
    useEffect(() => {
   fetch('review.json')
   .then(res =>res.json())
   .then(data=>setReview(data))
    },[review])
    return [review,setReview];

}
export default useReviewFetch;