import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, handleDelete }) => {

    const { userName, userImg, message, rating, _id, serviceName } = review;


    return (

        <div className='w-11/12 mx-auto py-3'>


            <div className='text-white border-2 rounded-lg p-5 bgbg border-black font-semibold'>

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

                        <div className='flex items-center gap-8'>

                            <div className='flex items-center gap-1'>
                                <div><FaStar className='text-yellow-300' /></div>

                                <span className='pt-1'>{rating}</span>
                            </div>

                            <div className='flex items-center gap-8 text-white'>
                                <div >

                                    <button onClick={() => handleDelete(_id)} className='bg-red-500 hover:bg-red-800 px-5 py-2 rounded-md duration-1000'>
                                        Delete
                                    </button>

                                </div>
                                <div>
                                    <Link to={`/update/${_id}`}>
                                        <button className='bg-blue-500  hover:bg-blue-800 px-5 py-2 rounded-md duration-1000'>
                                            Update
                                        </button>

                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='flex flex-col gap-3'>

                        <div className='flex items-center gap-3 '>

                            <div>
                                <h1>Service Name : <span className='text-black'>{serviceName}</span></h1>
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

export default MyReviewCard;

