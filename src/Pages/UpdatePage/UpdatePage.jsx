import { useLoaderData } from "react-router-dom";
import UpdateJob from "../../Components/UpdateJob/UpdateJob";

const UpdatePage = () => {

    const job = useLoaderData()

    return (
        <div>
            <UpdateJob job={job}></UpdateJob>
        </div>
    );
};

export default UpdatePage;