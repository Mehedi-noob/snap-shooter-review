import React from 'react';
import ManualLogin from './ManualLogin';

const Login = () => {
    return (
        <div>
            <ManualLogin className='w-full my-20'></ManualLogin>
            <div className=''>
                <div className="btn-group btn-group-vertical">
                    <button className="btn btn-active">Button</button>
                    <button className="btn">Button</button>
                    <button className="btn">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Login;