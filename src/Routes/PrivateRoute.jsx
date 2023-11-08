import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../services/Firebase/AuthProvider';
import swal from 'sweetalert';

const PrivateRoute = ({ children, to }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // if(!user){
    //     return swal({
    //         title: "Congratulations!",
    //         text: "Login Was Successful!",
    //         icon: "success",
    //         button: "Okay",
    //     });
    // }

    if(loading){
        return <div className='h-[80vh] flex justify-center items-center'><span className="loading loading-spinner text-[#91C96F] loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    if(!user){
        swal({
            title: "Please Login!",
            text: "You Need To Login!",
            icon: "error",
            button: "Okay",
        });
        return <Navigate to="/login" state={{ from: to || location.pathname }} replace />;
    }

    
    
};

export default PrivateRoute;
