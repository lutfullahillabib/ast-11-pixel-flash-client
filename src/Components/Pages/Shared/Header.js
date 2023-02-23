import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const user = {}

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div className="bg-blue-600 sticky top-0 z-50 head">
            
            <div className="px-4 py-2 mx-auto  md:px-24 lg:px-8">
              
                <div className="relative flex items-center justify-between z-50 gap-2">

                    <div className="flex items-center hover:text-white duration-1000">

                        <Link
                            to="/"
                            title="Pixel-Flash"
                            className="inline-flex items-center p-2 curly "
                        >
                            <img src={logo} alt="logo" className='w-12 ' />

                            <span className="ml-2 text-lg md:text-xl font-bold tracking-wide uppercase ">
                                Pixel-Flash
                            </span>
                        </Link>

                    </div>



                    <div>
                        <ul className="items-center hidden space-x-4 lg:flex ">
                            <li>
                                <NavLink
                                    to="/home"
                                    title="Home"
                                    className="font-medium tracking-wide text-white transition-colors hover:text-black text-xl duration-1000"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    title="Services"
                                    className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                >
                                    Services
                                </NavLink>
                            </li>


                            {
                                user?.uid &&
                                <>
                                    <li>
                                        <NavLink
                                            to="/myReview"
                                            title="My-Review"
                                            className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                        >
                                            My-Review
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/addService"
                                            title="Add-Service"
                                            className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                        >
                                            Add-Service
                                        </NavLink>
                                    </li>
                                </>
                            }


                            <li>
                                <NavLink
                                    to="/blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                >
                                    Blog
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <ul className="items-center hidden space-x-8 lg:flex">
                        {
                            user?.uid ?
                                <>
                                    <span className='font-semibold text-xl text-black hover:text-yellow-300 w-24 duration-1000'>{user?.displayName}</span>

                                    <li>
                                        <NavLink
                                            onClick={handleLogOut}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-1000 rounded shadow-md bg-red-400 hover:bg-red-800 
                                            hover:text-white
                                            focus:shadow-outline focus:outline-none text-xl"
                                            title="Log Out / Sign Out"
                                        >
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            title="Log in / Sign in"
                                            className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                        >
                                            Sign in
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/register"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-1000 rounded shadow-md focus:shadow-outline focus:outline-none text-xl hover:text-white 
                                            
                                            bg-gradient-to-r from-cyan-300 to-blue-700 
                                            

                                            hover:from-blue-800 hover:to-blue-800 
                                            
                                            "
                                            title="Register / Sign up"
                                        >
                                            Sign up
                                        </NavLink>
                                    </li>
                                </>
                        }


                        <Link to="/">
                            {user?.photoURL ?

                                <img src={user?.photoURL} alt='Profile'
                                    title={user?.displayName}
                                    className='h-12 w-12 rounded-full border-2 border-white'

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                                // <img
                                //     src={user?.photoURL}
                                //     alt='Profile'
                                //     title={user?.displayName}
                                //     className='h-12 w-12 rounded-full border-2 border-black'
                                // >
                                // </img>

                                :

                                <FaUserAlt
                                    title='Profile'
                                    className='rounded-full bg-blue-100 p-2 h-12 w-12'
                                ></FaUserAlt>
                            }
                        </Link>


                    </ul>


                    {/* toggle */}
                    <div className="lg:hidden">
                        <button
                            title="Open Menu"
                            className="p-2 transition duration-1000 rounded focus:outline-none focus:shadow-outline -mt-2 -mr-1  hover:bg-white focus:bg-gray-200"
                            // className="-mt-2 -mr-2  hover:bg-white focus:bg-gray-200 duration-1000"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-black" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full ">
                                <div className="p-5 bg-blue-400 border rounded shadow-sm head">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className='p-1 hover:text-white curly duration-1000'>
                                            <Link
                                                to="/"
                                                title=" Pixel-Flash"
                                                className="inline-flex items-center "
                                            >
                                                <img src={logo} alt="logo" className='w-10' />
                                                <span className="ml-2 text-xl font-bold tracking-wide ">
                                                    Pixel-Flash

                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-1000 rounded hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-black" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>

                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"

                                                    title="Home"
                                                    className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/services"
                                                    title="Services"
                                                    className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>

                                            {
                                                user?.uid &&
                                                <>
                                                    <li>
                                                        <NavLink
                                                            to="/myReview"
                                                            title="My-Review"
                                                            className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                        >
                                                            My-Review
                                                        </NavLink>
                                                    </li>

                                                    <li>
                                                        <NavLink
                                                            to="/addService"
                                                            title="Add-Service"
                                                            className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                        >
                                                            Add-Service
                                                        </NavLink>
                                                    </li>
                                                </>
                                            }


                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>

                                            {
                                                user?.uid ?
                                                    <>
                                                        <li>
                                                            <span className='font-semibold text-xl text-black hover:text-yellow-300 pt-4 duration-1000'>{user?.displayName}</span>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                onClick={handleLogOut}
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-1000 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-xl hover:text-white"
                                                                title="Log Out / Sign Out"
                                                            >
                                                                Sign Out
                                                            </NavLink>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <NavLink
                                                                to="/login"
                                                                title="Log in / Sign in"
                                                                className="font-medium tracking-wide text-white transition-colors duration-1000 hover:text-black text-xl"
                                                            >
                                                                Sign in
                                                            </NavLink>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                to="/register"
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-1000 rounded shadow-md bg-blue-600 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-xl hover:text-white"
                                                                title="Register / Sign up"
                                                            >
                                                                Sign up
                                                            </NavLink>
                                                        </li>
                                                    </>
                                            }


                                            <li className='flex justify-center'>
                                                <Link to="/">
                                                    {user?.photoURL ?

                                                        // <img
                                                        //     src={user?.photoURL}
                                                        //     alt='Profile'
                                                        //     title={user?.displayName}
                                                        //     className='h-12 w-12 rounded-full'
                                                        // >
                                                        // </img>

                                                        <img src={user?.photoURL} alt='Profile'
                                                            title={user?.displayName}
                                                            className='h-12 w-12 rounded-full border-2 border-white'

                                                            onError={({ currentTarget }) => {
                                                                currentTarget.onerror = null;  // prevents looping
                                                                currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                                            }}
                                                        />

                                                        :

                                                        <FaUserAlt
                                                            title='Profile'
                                                            className='rounded-full bg-blue-100 p-2 h-12 w-12'
                                                        ></FaUserAlt>
                                                    }
                                                </Link>
                                            </li>


                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


