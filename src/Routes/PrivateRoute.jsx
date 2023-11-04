import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../services/Firebase/AuthProvider';

const PrivateRoute = ({ children, to }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='h-[89vh] flex justify-center items-center'><span className="loading loading-spinner text-[#FF9D00] loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: to || location.pathname }} replace />;
};

export default PrivateRoute;
