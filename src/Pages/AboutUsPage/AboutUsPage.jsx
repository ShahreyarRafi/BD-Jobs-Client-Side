
import { useEffect } from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';

const AboutUsPage = () => {
    useEffect(() => {
        document.title = "BD JOBS | ABOUT US";
    }, []);
    return (
        <div>
            <AboutUs></AboutUs>
        </div>
    );
};

export default AboutUsPage;