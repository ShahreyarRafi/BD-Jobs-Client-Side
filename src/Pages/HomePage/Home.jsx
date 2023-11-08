import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Jobs from '../../Components/Jobs/Jobs';
import Teams from '../../Components/Teams/Teams';
import { useEffect } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";



const Home = () => {




    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, [controls]);

 
    const allJobs = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
            >
                <Jobs allJobs={allJobs}></Jobs>
                <Teams></Teams>
                <WhyUs></WhyUs>
            </motion.div>
        </div>
    );
};

export default Home;
