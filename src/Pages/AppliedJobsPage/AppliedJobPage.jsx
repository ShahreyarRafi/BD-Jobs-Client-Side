
import { useContext, useEffect, useState } from 'react';
import AppliedJobs from '../../Components/AppliedJobs/AppliedJobs';
import { AuthContext } from '../../services/Firebase/AuthProvider';

const AppliedJobPage = () => {
    const { user } = useContext(AuthContext)
    const [appliedJobs, SetAppliedJobs] = useState([]);

    const url = `http://localhost:5000/applied-jobs?uid=${user.uid}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => SetAppliedJobs(data))
    }, [])

    return (
        <div>
            <AppliedJobs appliedJobs={appliedJobs}></AppliedJobs>
        </div>
    );
};

export default AppliedJobPage;