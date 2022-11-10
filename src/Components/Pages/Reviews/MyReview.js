import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/Title';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

import Lottie from 'lottie-react';
import noData from '../../assets/noData.json';
import { Link } from 'react-router-dom';


const MyReview = () => {

    useTitle('My-Review');


    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    const { user, logOut } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Pixel-Flash")}`,
            },
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }

                return res.json()
            })
            .then(data => {
                console.log('received', data);
                setMyReviews(data);
            })

    }, [user?.email, logOut])
    // console.log(myReviews);


    const handleDelete = id => {
        const proceed = window.confirm(`Sure, You Want to Delete this Review ?`);
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                        toast.success(`Review Successfully Deleted`, {
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
                    }
                })
                .catch((err) => {
                    console.error(err);

                    toast.error(`Error = ${err.message}`, {
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
                });

        }
    }

    return (

        <div className='my-5'>


            <div>
                {myReviews?.length === 0 ?
                    <>
                        <div>

                            <h1 className='text-black text-center text-2xl font-semibold py-2'>
                                You have {myReviews?.length} Reviews. <br />
                                No Reviews were Added.
                            </h1>

                            <div className="flex justify-center mb-8">
                                <div className="mt-5 h-1/2">
                                    <Lottie
                                        className="mx-auto"
                                        animationData={noData}
                                        loop={true}
                                    />
                                </div>
                            </div>

                            <div className='my-10 py-10'>
                                <Link
                                    to="/services"
                                    className="text-white bg-blue-900 hover:bg-blue-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold my-10 ">
                                    Give Review
                                </Link>
                            </div>


                        </div>

                    </>

                    :

                    <>

                        <div>
                            <h1 className='text-black text-center text-2xl font-semibold py-2'>
                                You have {myReviews?.length} Reviews <br />
                            </h1>

                            {
                                myReviews.map(rev => <MyReviewCard
                                    key={rev._id}
                                    review={rev}
                                    handleDelete={handleDelete}></MyReviewCard>)
                            }
                        </div>
                    </>
                }
            </div>





        </div>

    );
};

export default MyReview;

