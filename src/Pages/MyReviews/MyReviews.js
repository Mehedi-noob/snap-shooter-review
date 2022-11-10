import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.deletedCount > 0){
                const remaining = reviews.filter(rev=> rev._id!== id)
                setReviews(remaining);
            }
        })
        setReviews(reviews);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                reviews.map(review =>
                    <div key={review._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{review.serviceName}</h2>
                                <p>Email: {review._id}</p>
                                <p>Email: {review.email}</p>
                                <p>Review: {review.review}</p>
                                <p>Date: {review.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/reviews/${review._id}`}><button className="btn btn-warning">Edit Review</button></Link>
                                    <button onClick={()=>handleDelete(review._id)} className="btn btn-error">Delete Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyReviews;