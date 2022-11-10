import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ReviewForm = ({ serviceDetails }) => {

    const { name, img, description, price, rating, _id } = serviceDetails;
    // console.log(serviceDetails);

    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const message = form.message.value;
        const userName = user?.displayName;
        const email = user?.email;
        const userImg = user?.photoURL;
        const serviceId = _id;
        const serviceName = name;
        console.log(message, userName);

        const review = {
            rating,
            message,
            userImg,
            userName,
            email,
            serviceId,
            serviceName,
        }

        // console.log(typeof(rating));

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {

                // console.log(data);
                if (data.acknowledged) {

                    toast.success(`Review Successfully Added`, {
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

    };
    // console.log(reviews);



    return (
        <div>

            <div className='my-5'>
                <h1 className='text-black text-2xl font-semibold text-center underline'>Please, Give A Review for <span className='text-white'>'{name}'</span></h1>

                <form
                    onSubmit={handleReview}
                    className="space-y-6 max-w-lg mx-auto my-5">

                    {/* rating */}
                    <div className="space-y-1">

                        <label htmlFor="Rating" className="block text-white text-start font-semibold text-xl">
                            Rating
                        </label>

                        <select
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

                        <textarea rows={5} type="text" name="message" id="message" placeholder="Message" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

                    {/* submit-button */}
                    <button

                        className="block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300 duration-1000">
                        Submit
                    </button>

                </form>

            </div>
        </div>
    );
};

export default ReviewForm;

