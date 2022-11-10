
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";
import AddService from "../Pages/Services/AddService";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Error from "../Pages/Shared/Error";
import { allServices, singleServiceDetails, threeServices } from "./Loader";
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
                element: <Home></Home>,
                loader: threeServices,
                // loader: () => {
                //     return fetch('http://localhost:5000/services')
                // }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: threeServices,
            },

            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: allServices,
            },
            {
                path: '/allservices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: singleServiceDetails,
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/allservices/${params.id}`)
                // }
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


        ]
    }
])

export default router;
