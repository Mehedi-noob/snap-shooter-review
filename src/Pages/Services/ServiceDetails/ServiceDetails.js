import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ServiceReviews from './ServiceReviews';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const service = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
        const date = new Date();
        const review = event.target.review.value;
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        console.log(review, date);

        const reviewDetails = {

            service: service._id,
            serviceName: service.s_name,
            userName: name,
            image: photoURL,
            email: user.email,
            review,
            date
        }
        console.log(reviewDetails)

        fetch('https://service-review-server-rust.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // if (data.acknowledged) {
                //     event.target.reset();
                // }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <Helmet>
                <title>SNS-service-details</title>
            </Helmet>
            <div className="flex flex-col w-full">
                <div className="grid card bg-base-300 rounded-box place-items-center p-5 gap-5">
                    <h1 className="text-2xl">Service section</h1>
                    <h1 className='m-5'>{service.s_name}</h1>
                    <img className='rounded-box' src={service.s_image} alt="" />
                    <h1>Service rating: {service.s_rating}</h1>
                    <h1>Service price: {service.s_price}</h1>
                    <p>{service.s_details}</p>
                </div>
                <div className="divider"></div>
                <div className="m-5 p-5 grid card bg-base-300 rounded-box place-items-center">
                    <h1 className="text-2xl">Review section</h1>
                    {/* review add field */}
                    <div className='m-5 gap-5 text-center'>
                        <h2>Add your review</h2>
                        {
                            user?.uid ?
                                <form onSubmit={handleReview} action="">
                                    <input type="text" name="name" id="name" placeholder="type Name" className="input input-bordered input-warning w-full max-w-xs" required />
                                    <input type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="input input-bordered input-warning w-full max-w-xs" required />
                                    <textarea type="text" name="review" id="review" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" required />
                                    <input className="mt-3 btn btn-primary" type="submit" />
                                </form>

                                :
                                <div>
                                    <p className='m-5'>If you want to add your review please <Link className='bg-error rounded text-black' to='/privateRoute'>Log in</Link></p>
                                </div>
                        }

                    </div>
                </div>
                <div>
                    <ServiceReviews
                        id={service._id}></ServiceReviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;