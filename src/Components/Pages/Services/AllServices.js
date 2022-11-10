import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useTitle from '../../../Hooks/Title';
import SingleService from './SingleService';

const AllServices = () => {

    useTitle('Services');


    const allServices = useLoaderData();

    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    // /*  */
    // const location = useLocation();
    // console.log(location);
    // // 
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     // window.scrollTo({ top: 0, left: 0 });
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // }, [pathname])
    // /*  */

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-center text-4xl font-semibold text-black py-3 underline curly'>My Photography Services</h1>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    allServices.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllServices;

