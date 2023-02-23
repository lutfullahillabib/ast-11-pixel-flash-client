import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

import Lottie from 'lottie-react'
import err from '../../assets/404.json'

const Error = () => {

    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    const error = useRouteError();

    return (
      
        <div>
            <div className="bg-blue-600 bg min-h-screen">
                <div className="flex items-center justify-center py-9 md:py-40 lg:py-8">
                    <div className="cus-svg-login rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                        <div className="flex flex-col items-center py-16 ">

                            {/* <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
                            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" /> */}

                            <Lottie animationData={err} loop={true} className='w-96 mx-auto' />

                            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-blue-700">OOPS!</h1>

                            {error && (
                                <div>
                                    <p className='text-red-600 text-2xl font-semibold md:text-3xl px-5 text-justify py-3'>{error.statusText || error.message}</p>

                                    <p className="text-white text-2xl pb-2 font-semibold text-center">{error.status}</p>
                                </div>
                            )}

                            <p className="px-4 pb-10 leading-none text-center text-black text-2xl font-semibold">No signal here! we cannot find the page you are looking for...!!!</p>

                            <button className="mx-4 px-4 py-2 border rounded-md text-white text-base bg-blue-800 hover:bg-blue-400 hover:font-semibold hover:px-10 hover:ease-in-out hover:text-black duration-1000 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                                <Link to='/' >Back to Homepage</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Error;

