import React, { useEffect, useState } from 'react';

const ServiceReviews = ({id}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id]);
    
    return (
        <div>
            {
                reviews.map(review=><div
                key={review._id}>
                    <h3>{review.email}</h3>
                    <p>{review.review}</p>
                    </div>
                    )
            }
        </div>
    );
};

export default ServiceReviews;