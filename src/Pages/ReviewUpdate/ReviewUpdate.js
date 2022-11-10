import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import toast, { Toaster } from 'react-hot-toast';

const ReviewUpdate = () => {
    const notify = () => toast('Update successfull');


    const review = useLoaderData();
    const reviewObj = review[0];
 
    const handleUpdate = event=>{
        event.preventDefault();

        const form = event.target;
        const upReview = form.review.value;
        console.log(upReview, reviewObj._id);

        fetch(`http://localhost:5000/reviews/${reviewObj._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({review: upReview})
        })
        notify();
    }

    return (
        <div className='text-center card border'>
            <Helmet>
                <title>SNS-Review-update</title>
            </Helmet>
            <h1>Review Id: {reviewObj._id}</h1>
            <h1>Review Email: {reviewObj.email}</h1>
            <p>Review: {reviewObj.review}</p>
            <form onSubmit={handleUpdate} action="">
                <textarea  type="text" name="review" id="review" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" required />
                <input className="mt-3 btn btn-primary" type="submit" /><Toaster />
            </form>
        </div>
    );
};

export default ReviewUpdate;