import React, { useContext } from 'react';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hooks/Title';


const ServiceDetails = () => {

    useTitle('Service-Details');


    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    const serviceDetails = useLoaderData();

    const { name, img, description, price, rating } = serviceDetails;

    const { user } = useContext(AuthContext);

    console.log(user?.email, user?.displayName, user?.photoURL);

    return (

        <div className="my-5" >

            <div className='w-11/12 mx-auto '>

                <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ">

                    <div className="h-auto w-auto lg:h-80 lg:w-11/12 mx-auto rounded-lg text-center overflow-hidden cursor-pointer" title={name}>

                        <PhotoProvider >
                            <PhotoView src={img} >

                                <img src={img} alt={name}
                                    title={name}
                                    className='h-full w-full rounded-lg '

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                            </PhotoView>
                        </PhotoProvider>

                    </div>

                    <div className="bg-blue-600 bgbg rounded py-4 px-9 flex flex-col justify-between leading-normal w-full">
                        <div className="mb-8">

                            <p className="flex my-3 justify-between">


                                <Link to={`/services`} title='Services'>
                                    <button className='text-white hover:text-black duration-1000'>
                                        <FaArrowLeft className='text-3xl' />
                                    </button>
                                </Link>


                            </p>

                            <div className="text-white font-bold text-2xl mb-2 underline">{name}</div>

                        </div>

                        <div>
                            <p className='text-justify mb-8 text-white'><span className='font-bold text-black'>Description:</span> {description}</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between pb-2">

                            <p className="text-3xl font-bold text-white">${price}</p>

                            <p className="flex items-center gap-2 bg-blue-100 text-blue-900 font-semibold text-lg px-2.5 py-0.5 rounded"> <FaStar className='text-yellow-400' />{rating}</p>


                        </div>

                    </div>

                </div>

            </div>

            {/* review */}

            <div>

            </div>

        </div>

    );
};

export default ServiceDetails;

