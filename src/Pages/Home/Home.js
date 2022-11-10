import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
import Drawer from './Drawer';

const Home = () => {
    const serviceDemo = useLoaderData();

    return (
        <div className='grid gap-y-5'>
            <Helmet>
                <title>SNS Home</title>
            </Helmet>
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
                                        <img className='cursor-pointer' src={service.s_image} alt="image availabe but CORB problem" />
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

            {/* timer */}
            <div className='grid grid-cols-1 text-center border-double border-4 border-sky-500 rounded-box p-20'>
                <h1 className='text-xl'>Photography's Passion to Profession (My life)</h1>
                <p>Photographs are the universal language of our era. Everyone has hundreds, maybe thousands in their pocket. Weightless, they turn the scale when the argument is: What happened here? Images don’t age or warp. A great photographer’s strings never go out of tune. It is for this reason that we need photographers. They are the ones who sort all the chaos of the world into images that bring clarity to the free-for-all of life. They are the witnesses and artists who can distill the mayhem and beauty that surrounds us. They call our attention to the things we miss in our everyday lives and they call our attention to events and people at a great distance from our own patch of the universe. When they direct our eyes and hearts with precision and honesty, we know what we know differently and better. Photographers teach us to look again, look harder. Look through their eyes.</p>
                <Link to="https://time.com/4839246/photographers-passion/"><button  className='btn btn-info'>ask others</button></Link>
            </div>

            {/* drawer start  */}
            <Drawer></Drawer>
        </div>
    );
};

export default Home;