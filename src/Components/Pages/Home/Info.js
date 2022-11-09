import React from 'react';

import { MdLocationOn, MdOutlineWatchLater, MdPhone } from "react-icons/md";

import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";


const Info = () => {
    return (


        <div className="w-[95%] mx-auto text-white rounded-lg cus-svg-rev my-5" id='contact'>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-12 px-7">

                <div className="p-5 rounded-lg gap-6 flex items-center cus-svg-login ">

                    <FaCalendarAlt className="text-6xl" />

                    <div className='text-start flex flex-col gap-1'>

                        <p className="text-lg">Saturday - Thursday</p>

                        <h2 className="text-2xl font-bold">7:00 AM - 9:00 PM</h2>

                    </div>

                </div>

                <div className="p-5 rounded-lg gap-6 flex items-center cus-svg-login ">

                    <MdPhone className="text-6xl" />

                    <div className="text-start flex flex-col gap-1">

                        <p className="text-lg">Phone ~ Direct Contact</p>

                        <h2 className="text-2xl font-bold">+8801234567890</h2>

                    </div>

                </div>

                <div className="p-5 rounded-lg gap-6 flex items-center cus-svg-login ">

                    <MdLocationOn className="text-6xl " />

                    <div className="text-start flex flex-col gap-1">

                        <p className="text-lg">Office Address</p>

                        <h2 className="text-2xl font-bold">Dhaka, Bangladesh</h2>

                    </div>

                </div>

            </div>
        </div>


    );
};

export default Info;


