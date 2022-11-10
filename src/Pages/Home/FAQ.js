import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='m-5 p-5 text-center text-2xl'>Frequently Asked questions about Photography</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is white balance?
                </div>
                <div className="collapse-content">
                    <p> In simpler language, white balance in digital photography means adjusting colors so that the image looks more natural.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What does manual mode mean and do I have to learn it?
                </div>
                <div className="collapse-content">
                    <p>Manual Mode is the mode in which you control your camera's settings. You can alter your ISO, shutter speed, and aperture on your own—plus other functions.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How do you achieve sharp focus?
                </div>
                <div className="collapse-content">
                    <p>The basic concept is pretty simple. You focus on the closest thing to the camera, then focus on the farthest object, and then center the focusing ring halfway in between those distances. Not halfway out in the field, but halfway between the distance marks on the lens.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;