
import { useContext, useEffect, useState } from 'react';
import AppliedJobs from '../../Components/AppliedJobs/AppliedJobs';
import { AuthContext } from '../../services/Firebase/AuthProvider';
import axios from 'axios';

const AppliedJobPage = () => {
    const { user } = useContext(AuthContext)
    const [appliedJobs, SetAppliedJobs] = useState([null]);

    useEffect(() => {
        document.title = "BD JOBS | APPLIED JOBS";
    }, []);


    const url = `https://bd-jobs-server.vercel.app/applied-jobs?email=${user.email}`

    useEffect( () => {
        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     SetAppliedJobs(res.data)
        // })
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