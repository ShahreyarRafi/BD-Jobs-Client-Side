import { useEffect } from 'react';
import MyJobs from '../../Components/MyJobs/MyJobs';

const MyJobsPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | MY JOBS";
    }, []);


    return (
        <div>
            <MyJobs></MyJobs>
        </div>
    );
};

export default MyJobsPage;