
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import toast from 'react-hot-toast';

import Lottie from 'lottie-react'
import log from '../../assets/login.json'
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

                toast.success(`Login Successful, 'Email' = ${user.email}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '✔️',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })
            .catch(error => {
                console.error(error)
                toast.error(`Error = ${error.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

                toast.success(`Login Successful, 'Email' = ${user.email}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '✔️',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
                toast.error(`Error = ${error.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-20'>

            <Lottie animationData={log} loop={true} className='w-[80%] mx-auto' />


            <div className="w-11/12 mx-auto md:w-full max-w-md p-8 space-y-3 rounded-xl bg-blue-600 text-white cus-svg-login">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form

                    onSubmit={handleSubmit}

                    className="space-y-6 ">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-white text-start font-semibold text-xl">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-white text-start font-semibold text-xl">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                        <div className="flex justify-between font-medium italic py-5">

                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-blue-900 focus:border-blue-900 focus:ring-2 accent-blue-900 h-5 w-5" />

                                <label htmlFor="remember" className="pl-2 text-white hover:text-black hover:underline cursor-pointer">Remember me</label>
                            </div>

                            <Link to='/login' className='hover:text-black text-white hover:underline cursor-pointer'>Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300">Sign in</button>
                </form>

                <p className='text-red-600 font-semibold text-xl'>{error}</p>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                    <p className="px-3 text-white">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button

                        onClick={handleGoogleSignIn}

                        title="Log in with Google" className="p-3 hover:bg-blue-100 hover:text-black rounded-full
                        
                         focus:ring-2 focus:ring-offset-1 focus:ring-blue-400
                        ">
                        <FaGoogle className='text-3xl' />
                    </button>
                </div>

                <p className="italic text-center sm:px-6  text-white">Don't have an account?
                    <Link to='/register' title='Register / Sign Up' className="underline text-white not-italic font-medium px-3 hover:text-black">Sign up</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;

