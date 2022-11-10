import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ManualLogin from './ManualLogin';
import { FaGoogle } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Login = () => {
    const { providerLogin, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setLoading(true);
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://service-review-server-rust.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('SNS-token', data.token);
                        navigate(from, { replace: true });
                    });
            })


    }

    return (
        <div>
            <Helmet>
                <title>SNS-login</title>
            </Helmet>
            {
                loading ?
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                :
                    <div>
                        <ManualLogin className='w-full my-20'></ManualLogin>
                        <div className=''>
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn m-5"> <p>Log in with Google </p> <FaGoogle></FaGoogle></button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;