import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from 'react-helmet-async';




const MyReviews = () => {
    let indicator = true;

    const notify = () => toast('deletion successfull');

    const [reviews, setReviews] = useState([]);

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('SNS-token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data))
            
    }, [user?.email, logOut]);
    
    
    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setTimeout(() => {
                        setReviews(remaining);
                    }, 1000);


                }
            })
        setReviews(reviews);
        

    }
    if(reviews.length===0){
        return <div className='grid grid-cols-1 text-center text-xl'><h1>No reviews were added</h1></div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <Helmet>
                <title>SNS-My-reviews</title>
            </Helmet>
            {
               reviews.map(review =>
                    <div key={review._id}>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{review.serviceName}</h2>
                                <p>ReviewId: {review._id}</p>
                                <p>Email: {review.email}</p>
                                <p>Review: {review.review}</p>
                                <p>Date: {review.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/reviews/${review._id}`}><button className="btn btn-warning">Edit Review</button></Link>
                                    <button onClick={async () => {
                                        notify();
                                        handleDelete(review._id);
                                    }} className="btn btn-error">Delete Review</button><Toaster />

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