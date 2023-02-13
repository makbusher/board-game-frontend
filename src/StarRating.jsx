import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import "./index.css";
import { ReviewsNew } from "./ReviewsNew";

export function StarRating(props) {  
  const [rating, setRating] = useState(props.value);
  const [hover, setHover] = useState(null);
  const [overallRating, setOverallRating] = useState(4);

  return (
    <div >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating(ratingValue)}
            />
            <FaStar 
              className="star" 
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={35}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)} 
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;