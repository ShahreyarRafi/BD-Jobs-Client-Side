import React, { useEffect } from 'react';
import Register from '../../Components/Register/Register';

const RegisterPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | REGISTER";
    }, []);


    return (
        <div>
            <Register></Register>
        </div>
    );
};

export default RegisterPage;