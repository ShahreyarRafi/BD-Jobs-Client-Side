
import { useLoaderData } from 'react-router-dom';
import AllJobs from '../../Components/AllJobs/AllJobs';

const AllJobsPage = () => {

    const allJobs = useLoaderData()

    return (
        <div>
            <AllJobs allJobs={allJobs} ></AllJobs>
        </div>
    );
};

export default AllJobsPage;