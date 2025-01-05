import React, { useEffect, useState } from 'react';

const useReviews = () => {

    const [reviews,setReviews] = useState([])
      const [loading, setLoading] = useState(true); // Default to true since data is loading
    


    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching menu data:", error);
          setLoading(false); // Stop loading even if there's an error
        });
  
    },[])
    return [reviews]
};

export default useReviews;