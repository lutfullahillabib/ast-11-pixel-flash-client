import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();

    return (
        <div>
            <div className="bg-blue-600 min-h-screen">
                <div className="flex items-center justify-center py-9 md:py-40 lg:py-8">
                    <div className="bg-blue-400 rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                        <div className="flex flex-col items-center py-16 ">
                            <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
                            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
                            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-blue-700">OOPS!</h1>
                            {error && (
                                <div>
                                    <p className='text-red-600 text-2xl font-semibold md:text-3xl px-5 text-justify py-3'>{error.statusText || error.message}</p>

                                    <p className="text-black text-2xl pb-2 font-semibold">{error.status}</p>
                                </div>
                            )}
                            <p className="px-4 pb-10 leading-none text-center text-blue-900 text-xl">No signal here! we cannot find the page you are looking for...!!!</p>
                            <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                                <Link to='/' >Back to homepage</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;

