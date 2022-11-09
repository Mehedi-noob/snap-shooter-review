import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
    }

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        {
                            user?.uid ?
                                <li>{user.displayName}</li>
                                :
                                <div>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </div>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"> <img className='w-10 m-1' src="../../SNR.jpg" alt="" /> SNap-Shooter-Review</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    {
                        user?.uid ?
                            <div className='flex'>
                                <li><Link>{user.displayName}</Link></li>
                                <button onClick={handleLogOut} className='btn'>Log Out</button>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                                <li><Link to='/addservice'>Add Service</Link></li>
                            </div>
                            :
                            <div className='flex'>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </div>
                    }
                </ul>
            </div>
        </div>

    );
};

export default Header;