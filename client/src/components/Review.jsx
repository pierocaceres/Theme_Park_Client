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
        setSendReview(...sendReview, userReview)
        //axios.push("URL", sendReview)
        console.log(sendReview)
    }

    return (
        <div>
            <input type="text" name="review" placeholder="Leave your review" value={userReview} onChange={(event) => handleReview(event)}/>
            <button onClick={getReview}>Submit</button>
        </div>
    );
}

export default Review;