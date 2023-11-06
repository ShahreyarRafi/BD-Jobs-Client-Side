import { useLoaderData } from 'react-router-dom';
import Details from '../../Components/Details/Details';

const DetailsPage = () => {

    const job = useLoaderData()

    return (
        <div>
            <Details jobDetails={job}></Details>
        </div>
    );
};

export default DetailsPage;