import { useLoaderData } from 'react-router-dom';
import Details from '../../Components/Details/Details';
import { useEffect } from 'react';

const DetailsPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | JOB DETAILS";
    }, []);

    const job = useLoaderData()

    return (
        <div>
            <Details jobDetails={job}></Details>
        </div>
    );
};

export default DetailsPage;