import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewCard = ({ review, serviceDetails }) => {


    const { userImg, userName, email, message, rating, serviceName, serviceId, _id } = review;

    const { name, img } = serviceDetails;

    return (


        <div>

            <div className='text-white my-5 border-2 rounded-lg p-5 border-black font-semibold'>

                <div className='flex flex-col gap-5 '>

                    <div className='flex flex-col gap-3'>

                        <div className='flex items-center gap-3'>

                            <div>

                                <img src={userImg} alt={userName}
                                    title={userName}
                                    className='w-12 h-12 rounded-full'

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                            </div>


                            <div>
                                <h1>{userName}</h1>
                            </div>

                        </div>

                        <div className='flex items-center gap-1'>
                            <div><FaStar className='text-yellow-300' /></div>

                            <span className='pt-1'>{rating}</span>
                        </div>
                    </div>


                    <div className='flex flex-col gap-3'>

                        <div className='flex items-center gap-3 '>

                            <div>
                                <h1>Service Name : <span className='text-black'>{name}</span></h1>
                            </div>

                        </div>

                        <div className=' text-justify'>
                            <span className='p-0 m-0 break-words'><span className='text-black'>Review : </span> {message}</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>


    );
};

export default ReviewCard;

