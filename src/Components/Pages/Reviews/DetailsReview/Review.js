import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import AllReviews from './AllReviews';

const Review = ({ serviceDetails }) => {

    console.log(serviceDetails);

    const { name, img, description, price, rating } = serviceDetails;

    return (

        <div className='my-10 w-11/12 mx-auto bgbg rounded-md shadow-lg p-2'>


            <div className='w-11/12 mx-auto py-10 px-2 '>
                <h1 className='text-black text-2xl font-semibold'>Review & Rating of
                    {' '}
                    <span className='text-white'>'{name}'</span>
                    {' '}
                    Service.</h1>

                <div className='p-5 '>
                    <h1 className='text-4xl font-semibold text-white flex justify-center gap-1'>
                        <FaStar className='text-yellow-300' />
                        {rating}
                    </h1>
                </div>
            </div>

            <div>
                <AllReviews serviceDetails={serviceDetails}></AllReviews>
            </div>

        </div>
    );
};

export default Review;


