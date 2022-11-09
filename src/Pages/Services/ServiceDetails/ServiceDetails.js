import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
const service = useLoaderData();

    return (
        <div className='text-center'>
            <h1>{service.s_name}</h1>
        </div>
    );
};

export default ServiceDetails;