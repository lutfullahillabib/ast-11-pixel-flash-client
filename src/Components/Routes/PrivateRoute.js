import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='my-44'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-800 p-10 mx-auto">
            </div>
            <div className="flex items-center justify-center space-x-2 mt-[-50px] animate-spin">
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-[-40px] animate-spin">
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-[-65px] rotate-45 animate-spin">
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-[-65px] -rotate-45 animate-spin">
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-800"></div>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return (children);
};

export default PrivateRoute;


