import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';

const Home = () => {
    const serviceDemo = useLoaderData();

    return (
        <div>
            {/* banner start  */}
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off for long term deals
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free photoshoot of legendary moments! Use code:</span>
                            <span className="font-bold text-lg">SNap-Shooters</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end  */}

            {/* serviceDemo start  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    serviceDemo.map(service => <div key={service._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                {/* photo view portion start */}
                                <PhotoProvider>
                                    <PhotoView src={service.s_image}>
                                        <img className='cursor-pointer' src={service.s_image} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                {/* photo view portion end */}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.s_name}</h2>
                                <p>{service.s_details.slice(0, 99)}...</p>
                                <div className="card-actions">
                                    <Link to={`/services/${service._id}`}>
                                        <button className="btn btn-primary">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='grid grid-cols-1 justify-items-end'><Link to='/services'><button className='btn btn-primary'>See All Services</button></Link></div>
            {/* serviceDemo end  */}

            {/* FAQ start  */}
            <FAQ></FAQ>
        </div>
    );
};

export default Home;