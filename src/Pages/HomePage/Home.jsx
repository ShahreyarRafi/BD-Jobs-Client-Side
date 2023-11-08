import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Jobs from '../../Components/Jobs/Jobs';
import Teams from '../../Components/Teams/Teams';


const Home = () => {

    const allJobs = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Jobs allJobs={allJobs}></Jobs>
            <Teams></Teams>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;
