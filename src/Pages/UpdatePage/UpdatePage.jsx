import { useLoaderData } from "react-router-dom";
import UpdateJob from "../../Components/UpdateJob/UpdateJob";

const UpdatePage = () => {

    useEffect(() => {
        document.title = "BD JOBS | REGISTER";
    }, []);


    const job = useLoaderData()

    return (
        <div>
            <UpdateJob job={job}></UpdateJob>
        </div>
    );
};

export default UpdatePage;