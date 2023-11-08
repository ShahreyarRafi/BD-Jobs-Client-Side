import React, { useEffect } from 'react';
import Error from '../../Components/Error/Error';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | ERROR";
    }, []);


    return (
        <div>
            <Error></Error>
        </div>
    );
};

export default ErrorPage;