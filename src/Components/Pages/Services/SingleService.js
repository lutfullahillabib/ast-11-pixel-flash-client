import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({ service }) => {

    // console.log(service);

    const { name, img, description, price, rating, _id } = service;

    return (

        <div>

            <div className='my-5 '>
                {/* flex justify-center items-center */}

                <div className="w-11/12  mx-auto  rounded-lg shadow-md bg-blue-700 bgbg border-0  h-[565px]  flex justify-between flex-col ">

                    {/* p-8 */}
                    <div className='m-8'>
                        <div className=' cursor-pointer '>

                            <PhotoProvider >
                                <PhotoView src={img} >

                                    <img src={img} alt={name}
                                        title={name}
                                        className=" rounded-lg  h-56 w-full"

                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;  // prevents looping
                                            currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                        }}
                                    />

                                </PhotoView>
                            </PhotoProvider>

                        </div>
                    </div>

                    <div className="px-5 pb-5 flex justify-between flex-col h-72">

                        <h5 className="text-xl font-semibold tracking-tight text-white ">{name}</h5>

                        <div className="flex items-center justify-between mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1"> <FaStar className='text-yellow-400'></FaStar> {rating}</span>

                            <span className="text-3xl font-bold text-white">${price}</span>
                        </div>

                        <div className='text-justify text-white'>

                            <p> {description.length > 100 ? description.slice(0, 100) + ' .....' : description} </p>

                            {/* <p> {` ${description.length > 100 ? description.slice(0, 100) : description} `} <br />  .....</p> */}

                        </div>

                        <div className="flex justify-end items-center mt-5">

                            <Link to={`/allservices/${_id}`} className="text-white bg-blue-900 hover:bg-blue-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">View Details</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleService;

