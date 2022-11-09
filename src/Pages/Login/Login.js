import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ManualLogin from './ManualLogin';
import { FaGoogle} from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    navigate(from, { replace: true });
                    console.log("navigate is working")
                }
            })
    }

    return (
        <div>
            <ManualLogin className='w-full my-20'></ManualLogin>
            <div className=''>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn m-5"> <p>Log in with Google </p> <FaGoogle></FaGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default Login;