import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ServiceReviews = ({ id }) => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, id]);

    return (
        <div>
            {
                reviews.map(review => <div key={review._id}>
                    
                    <div className="m-5 border card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-100' src={review.image} alt="image availabe but CORB problem" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.userName}</h2>
                            <p>{review.review}</p>
                        
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServiceReviews;