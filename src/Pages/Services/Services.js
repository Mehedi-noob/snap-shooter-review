import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Favicon from 'react-favicon';




import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://service-review-server-rust.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .then (setLoading(false));
    }, []);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <Helmet>
                <title>SNS-services</title>
            </Helmet>
            {
                !loading?
                services.map(service => <div key={service._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            {/* photo view portion start */}
                            <PhotoProvider>
                                <PhotoView src={service.s_image}>
                                    <img className='cursor-pointer' src={service.s_image} alt="image availabe but CORB problem" />
                                </PhotoView>
                            </PhotoProvider>
                            {/* photo view portion end */}
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.s_name}</h2>
                            <h2 className="card-title">Price: {service.s_price}$</h2>
                            <p>{service.s_details.slice(0, 99)}...</p>
                            <div className="card-actions">
                                <Link to={`/services/${service._id}`}>
                                    <button className="btn btn-primary">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
                :
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            }

        </div>
    );
};

export default Services;