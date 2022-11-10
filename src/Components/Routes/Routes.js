
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";
import ReviewForm from "../Pages/Reviews/DetailsReview/ReviewForm";
import MyReview from "../Pages/Reviews/MyReview";
import ReviewUpdate from "../Pages/Reviews/ReviewUpdate";
import AddService from "../Pages/Services/AddService";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Error from "../Pages/Shared/Error";
import { allServices, singleServiceDetails, threeServices, updateReview } from "./Loader";
import PrivateRoute from "./PrivateRoute";

// const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: threeServices,
                element: <Home></Home>,
                // loader: () => {
                //     return fetch('http://localhost:5000/services')
                // },
            },
            {
                path: '/home',
                loader: threeServices,
                element: <Home></Home>,
            },

            {
                path: '/services',
                loader: allServices,
                element: <AllServices></AllServices>,
            },
            {
                path: '/allservices/:id',
                loader: singleServiceDetails,
                element: <ServiceDetails></ServiceDetails>,
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/allservices/${params.id}`)
                // },
            },

            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },
            {
                path: '/update/:id',
                loader: updateReview,
                element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/myReview/${params.id}`),
            },

            {
                path: '/review',
                element: <ReviewForm></ReviewForm>
            }

        ]
    }
])

export default router;
