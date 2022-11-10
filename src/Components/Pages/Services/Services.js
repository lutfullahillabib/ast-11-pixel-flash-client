import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const Services = ({ services }) => {

    return (

        <div className='my-5'>

            <h1 className='text-center text-4xl font-semibold text-black py-3 underline curly'>My Photography Services</h1>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>

            <div className="flex justify-between items-center py-3">
                <Link to='/services'

                    className='px-5 py-3 text-white rounded-md  hover:text-black hover:font-semibold  hover:px-10 hover:ease-in-out duration-1000  bg-gradient-to-r from-[#00FFFF] to-[#0000FF] hover:bg-gradient-to-r hover:from-[#0000FF] hover:to-[#00FFFF] flex gap-3 items-center justify-center mx-auto hover:gap-7'>

                    See All Services

                    <FaArrowRight className='text-lg' />

                    {/* bg-blue-700 hover:bg-blue-500 */}

                </Link>
            </div>


        </div>
    );
};

export default Services;

