import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/Title';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

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

    const { user } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))

    }, [user?.email])
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

            <h1 className='text-black text-center text-2xl font-semibold py-2'>
                You have {myReviews.length} Reviews <br />
            </h1>

            {
                myReviews.map(rev => <MyReviewCard
                    key={rev._id}
                    review={rev}
                    handleDelete={handleDelete}></MyReviewCard>)
            }

        </div>

    );
};

export default MyReview;

