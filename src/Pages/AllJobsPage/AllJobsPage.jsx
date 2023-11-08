
import { useLoaderData } from 'react-router-dom';
import AllJobs from '../../Components/AllJobs/AllJobs';
import { useEffect } from 'react';

const AllJobsPage = () => {
    const allJobs = useLoaderData()

    useEffect(() => {
        document.title = "BD JOBS | ALL JOBS";
    }, []);


    return (
        <div>
            <AllJobs allJobs={allJobs} ></AllJobs>
        </div>
    );
};

export default AllJobsPage;