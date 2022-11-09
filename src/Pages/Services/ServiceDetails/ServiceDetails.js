import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);

    const service = useLoaderData();

    const handleReview = event =>{
        event.preventDefault();
        const date = new Date();
        const review = event.target.review.value;
        console.log(review, date);

        const reviewDetails = {
            
            service: service._id,
            serviceName: service.s_name,
            email: user.email,
            review,
            date
        }
    }


    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="grid card bg-base-300 rounded-box place-items-center p-5 gap-5">
                    <h1 className="text-2xl">Service section</h1>
                    <h1 className='m-5'>{service.s_name}</h1>
                    <img className='rounded-box' src={service.s_image} alt="" />
                    <h1>Service rating: {service.s_rating}</h1>
                    <p>{service.s_details}</p>
                </div>
                <div className="divider"></div>
                <div className="m-5 p-5 grid card bg-base-300 rounded-box place-items-center">
                    <h1 className="text-2xl">Review section</h1>
                    {/* review add field */}
                    <div className='m-5 gap-5 text-center'>
                        <h2>Add your review</h2>
                        <p className='m-5'>If you want to add your review please <Link className='bg-error rounded text-black' to='/login'>Log in</Link></p>
                        <form onSubmit={handleReview} action="">
                            <input type="text" name="review" id="review" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" required/>
                            <input  className="mt-3 btn btn-primary" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;