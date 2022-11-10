import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/Title';

const ReviewUpdate = () => {

    useTitle('Update-Review');


    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    const updateReview = useLoaderData();

    const { _id } = updateReview;

    const { serviceName, rating, message } = updateReview;

    console.log(updateReview);

    const [review, setReview] = useState(updateReview);

    const navigate = useNavigate();


    const handelUpdateReview = (event) => {
        event.preventDefault();

        const form = event.target;
        // form.reset()

        fetch(`http://localhost:5000/myReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data);

                if (data.modifiedCount > 0) {
                    console.log(data);

                    toast.success(`Review Successfully Updated`, {
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

                    form.reset();

                    navigate('/myReview')

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


    const handelUpdateChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newReview = { ...review }
        newReview[field] = value
        setReview(newReview)
        console.log(review)

    }


    return (


        <div className='py-5'>

            <div className="w-11/12 mx-auto py-10 px-8 space-y-3 rounded-xl bg-blue-600 text-white cus-svg-login ">

                <h1 className='text-black text-2xl font-semibold text-center underline'>Update Your Review for <span className='text-white'>'{serviceName}'</span></h1>

                <form

                    onSubmit={handelUpdateReview}

                    className="space-y-6 max-w-lg mx-auto my-5">

                    {/* rating */}
                    <div className="space-y-1">

                        <label htmlFor="Rating" className="block text-white text-start font-semibold text-xl">
                            Rating
                        </label>

                        <select

                            defaultValue={rating}

                            onChange={handelUpdateChange}

                            name="rating"
                            id="rating"
                            placeholder="Rating"

                            className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-blue-700 placeholder:italic font-semibold text-lg italic"

                            required
                        >

                            <option value="" selected disabled hidden

                                className="outline-blue-700 "

                            >
                                Rating
                            </option>

                            <option value="1"
                                className="text-red-600  font-bold text-xl"
                            >1</option>

                            <option value="1.5"
                                className="text-red-600  font-bold text-xl"
                            >1.5</option>

                            <option value="2"
                                className="text-red-600  font-bold text-xl"
                            >2</option>

                            <option value="2.5"
                                className="text-yellow-600  font-bold text-xl"
                            >2.5</option>

                            <option value="3"
                                className="text-yellow-600  font-bold text-xl"
                            >3</option>

                            <option value="3.5"
                                className="text-yellow-600  font-bold text-xl"
                            >3.5</option>

                            <option value="4"
                                className="text-green-600  font-bold text-xl"
                            >4</option>

                            <option value="4.5"
                                className="text-green-600  font-bold text-xl"
                            >4.5</option>

                            <option value="5"
                                className="text-green-600  font-bold text-xl"
                            >5</option>

                        </select>

                    </div>

                    {/* message */}
                    <div className="space-y-1">

                        <label htmlFor="message" className="block text-white text-start font-semibold text-xl">
                            Message
                        </label>

                        <textarea rows={5}

                            defaultValue={message}

                            onChange={handelUpdateChange}

                            type="text" name="message" id="message" placeholder="Message" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

                    {/* submit-button */}
                    <button

                        className="block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300 duration-1000">
                        Submit
                    </button>

                    <Link to='/myReview' className="block w-full p-3 text-center text-white bg-green-900 rounded-lg font-medium hover:text-black hover:bg-green-300 duration-1000">
                        <button
                        >
                            Go Back
                        </button>
                    </Link>

                </form>

            </div>
        </div>

    );
};

export default ReviewUpdate;

