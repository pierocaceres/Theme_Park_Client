import React from 'react';
import { useState } from 'react'
import axios from 'axios'

function Review(props) {
    
    const [userReview, setUserReview] = useState('')
    const [sendReview, setSendReview] = useState([])

    const handleReview = (event) => {
        setUserReview(event.target.value)
    }

    const getReview = () => {
        if(userReview !== ""){
            let review = {comment : ""}
            review.comment = userReview
            setSendReview(sendReview => [...sendReview, review])
            //axios.push("URL", sendReview)
        }
    }

    return (
        <div>
            <input type="text" name="review" placeholder="Leave your review" value={userReview} onChange={(event) => handleReview(event)}/>
            <button onClick={() => getReview()}>Submit</button>
        </div>
    );
}

export default Review;