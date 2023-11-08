
import { useEffect } from 'react';
import AddAJob from '../../Components/AddAJob/AddAJob';

const AddAJobPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | ADD JOB";
    }, []);

    return (
        <div>
            <AddAJob></AddAJob>
        </div>
    );
};

export default AddAJobPage;