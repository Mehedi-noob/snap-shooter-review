import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <button className='btn btn-primary m-5'><Link to='/login'>Login to another account</Link></button>
                        <button className='btn btn-primary m-5'><Link to='register'>Register</Link></button>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;