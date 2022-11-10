import React from 'react';
import toast, { Toaster } from 'react-hot-toast';




const Utility = () => {
    const notify = () => toast('Here is your toast.');
    return (
        <div>
            
                {notify}
                <Toaster />
            
        </div>
    );
};

export default Utility;