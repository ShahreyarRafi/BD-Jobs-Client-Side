import React, { useEffect } from 'react';
import Login from '../../Components/Login/Login';

const LoginPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | LOGIN";
    }, []);


    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginPage;