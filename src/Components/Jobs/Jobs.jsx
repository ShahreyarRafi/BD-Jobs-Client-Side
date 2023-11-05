import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "On Site", label: "On Site" },
    { id: "Remote", label: "Remote" },
    { id: "Part-Time", label: "Part-Time" },
    { id: "Hybrid", label: "Hybrid" },
];

const Jobs = ({ allJobs }) => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="flex space-x-1 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"
                            } relative rounded-full px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-[#91C96F] mix-blend-multiply"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Display data from allJobs for the active tab */}
            <div className=" max-w-[1700px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 px-10 mx-auto">
                {allJobs
                    .filter((job) => job.job_category === activeTab)
                    .map((job, index) => (
                        <div key={index} >
                            <div key={job._id}>
                                <div className=" font-primary text-black dark:text-white relative bg-slate-100 dark:bg-[#1f2229] rounded-lg drop-shadow-lg ">
                                    <div className="price-tag-shape absolute font-bold top-0 left-0 bg-[#91C96F] text-black dark:text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                                        <span>Applied: 8</span>
                                    </div>
                                    <div>
                                        <figure className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                className='transform hover:scale-110 transition-transform duration-1000 object-cover h-96 w-full'
                                                style={{ transformOrigin: 'center center' }}
                                                src={job.card_image}
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                    <div>
                                        <div className="py-2 px-4 my-1">
                                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted By: </span>{job.posted_by}</h2>
                                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted: </span>{job.job_posting_date}</h2>
                                            <h2 className="text-sm truncate mb-3"><span className="font-medium">Deadline: </span>{job.application_deadline}</h2>
                                            <h5 className='text-xl font-bold truncate mb-1'>{job.salary_range}</h5>
                                        </div>
                                        <div className="card-actions justify-center border-t border-[#dbdcdd] dark:border-[#353a4a]">
                                            <Link >
                                                <button
                                                    className='font-primary text-sm font-medium hover:text-[#91C96F] duration-300 text-star px-7 py-3 w-full'>
                                                    SHOW DETAILS
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Jobs;



{/* <div className=" max-w-[1700px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 px-10 mx-auto">
    {
        allJobs.map(job => (
            <div key={job._id}>
                <div className=" font-primary text-black dark:text-white relative bg-slate-100 dark:bg-[#1f2229] rounded-lg drop-shadow-lg ">
                    <div className="price-tag-shape absolute font-bold top-0 left-0 bg-[#91C96F] text-black dark:text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                        <span>Applied: 8</span>
                    </div>
                    <div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover h-96 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={job.card_image}
                                alt=''
                            />
                        </figure>
                    </div>
                    <div>
                        <div className="py-2 px-4 my-1">

                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted By: </span>{job.posted_by}</h2>
                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted: </span>{job.job_posting_date}</h2>
                            <h2 className="text-sm truncate mb-3"><span className="font-medium">Deadline: </span>{job.application_deadline}</h2>
                            <h5 className='text-xl font-bold truncate mb-1'>{job.salary_range}</h5>
                        </div>
                        <div className="card-actions justify-center border-t border-[#dbdcdd] dark:border-[#353a4a]">
                            <Link >
                                <button
                                    className='font-primary text-sm font-medium hover:text-[#91C96F] duration-300 text-star px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

</div> */}