
const WhyUs = () => {
    return (
        <div className='font-primary dark:bg-[#090b11] bg-white text-black dark:text-gray-200 duration-300 w-full flex flex-col items-center justify-center py-10 px-5'>
            <h2 className='font-primary text-3xl lg:text-4xl font-bold'>Why Us?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl dark:bg-[#090b11] bg-white duration-300 py-12">
                <card className="border-green-500 border border-dashed hover:border-double rounded  py-7 px-5">
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/7069/7069350.png" />
                        </div>
                        <div className="col-span-4">
                            <p className="text-gray-700 dark:text-gray-200 font-bold">Comprehensive Job Listings</p>
                            <p className="text-gray-500 dark:text-gray-300 mt-4">At BD Jobs, discover a vast array of job opportunities, ensuring you find the perfect fit for your career.</p>
                        </div>
                    </div>
                </card>
                <card className="border-green-500 border border-dashed hover:border-double rounded py-7 px-5">
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-4 text-right">
                            <p className="text-gray-700 dark:text-gray-200 font-bold">Regional Insights</p>
                            <p className="text-gray-500 dark:text-gray-300 mt-4">Benefit from our in-depth knowledge of the local job market, helping you navigate the employment landscape in Bangladesh.</p>
                        </div>
                        <div className="col-span-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" />
                        </div>
                    </div>
                </card>
                <card className="border-green-500 border border-dashed hover:border-double rounded  py-7 px-5">
                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/2651/2651001.png" />
                        </div>
                        <div className="col-span-4">
                            <p className="text-gray-700 dark:text-gray-200 font-bold">Tailored Job Notifications</p>
                            <p className="text-gray-500 dark:text-gray-300 mt-4">Stay updated with custom job alerts, ensuring you are the first to know about job openings that align with your preferences.</p>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    );
};

export default WhyUs;