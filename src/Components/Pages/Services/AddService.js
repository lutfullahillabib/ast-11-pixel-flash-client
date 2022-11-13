import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import toast from 'react-hot-toast';
import useTitle from "../../../Hooks/Title";


const AddService = () => {

    useTitle('Add-Service');


    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    //


    const [error, setError] = useState('');


    const navigate = useNavigate();


    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;

        const ratings = parseFloat(form.rating.value);

        const rating = ratings.toString();

        // if (typeof (rating) === 'number') {
        //     console.log(rating);
        // }

        console.log(name, img, description, price, rating);

        const newService = {
            name,
            img,
            description,
            price,
            rating,
        };

        fetch('https://ast-11-pixel-flash-server.vercel.app/addService', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newService),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {

                    toast.success(`Service Successfully Added, 'Name' = ${name}`, {
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

                    setError('');

                }

                navigate("/services");

            })
            .catch((err) => {

                console.error(err);

                setError(error.message);

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

    return (
        <div className="py-5">

            <div className="w-11/12 mx-auto  p-8 space-y-3 rounded-xl bg-blue-600 text-white cus-svg-login ">

                <h1 className="text-2xl  font-bold text-center underline py-3">Add A New Service</h1>

                <form
                    onSubmit={handleAddService}
                    className="space-y-6 max-w-lg mx-auto">

                    {/* name */}
                    <div className="space-y-1">

                        <label htmlFor="name" className="block text-white text-start font-semibold text-xl">
                            Service Name
                        </label>

                        <input type="text" name="name" id="name" placeholder="Service Name" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

                    {/* img */}
                    <div className="space-y-1">

                        <label htmlFor="img" className="block text-white text-start font-semibold text-xl">
                            Image URL
                        </label>

                        <input type="text" name="img" id="img" placeholder="Image URL" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

                    {/* description */}
                    <div className="space-y-1">

                        <label htmlFor="description" className="block text-white text-start font-semibold text-xl">
                            Description
                        </label>

                        <textarea rows={5} type="text" name="description" id="description" placeholder="Description" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

                    {/* price */}
                    <div className="space-y-1">

                        <label htmlFor="price" className="block text-white text-start font-semibold text-xl">
                            Price
                        </label>

                        <input type="number" name="price" id="price" placeholder="Price" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                    </div>

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


                    <p className='text-red-600 font-semibold text-xl py-2 '>{error}</p>

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

export default AddService;


