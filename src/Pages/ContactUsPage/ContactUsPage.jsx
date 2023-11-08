import { useEffect } from 'react';
import ContactUs from '../../Components/ContactUs/ContactUs';

const ContactUsPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | CONTACT US";
    }, []);


    return (
        <div className='max-h-[70vh] bg-[#eef2fa] dark:bg-[#0f1116] py-[400px] flex items-center justify-center duration-300'>
            <ContactUs></ContactUs>
        </div>
    );
};

export default ContactUsPage;