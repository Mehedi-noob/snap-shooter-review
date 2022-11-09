import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='grid grid-cols-3'>
            {
                services.map(service => <div key={service._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service.s_image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.s_name}</h2>
                            <p>{service.s_details.slice(0, 100)}...</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">See Details</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Services;