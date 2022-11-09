
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";
import AllServices from "../Pages/Services/AllServices";
import Error from "../Pages/Shared/Error";
import { allServices, threeServices } from "./Loader";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },


        ]
    }
])

export default router;
