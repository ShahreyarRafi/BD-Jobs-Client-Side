
import { useLoaderData } from 'react-router-dom';
import MyJobs from '../../Components/MyJobs/MyJobs';
import { useContext } from 'react';
import { AuthContext } from '../../services/Firebase/AuthProvider';

const MyJobsPage = () => {

    const { user  } = useContext(AuthContext);


    return (
        <div>
            <MyJobs></MyJobs>
        </div>
    );
};

export default MyJobsPage;