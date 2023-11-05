import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "All", label: "All Jobs" },
    { id: "On Site", label: "On Site" },
    { id: "Remote", label: "Remote" },
    { id: "Part-Time", label: "Part-Time" },
    { id: "Hybrid", label: "Hybrid" },
];

const Jobs = ({ allJobs }) => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    let [showAllJobs, setShowAllJobs] = useState(false);

    // Function to toggle between showing all jobs and displaying 4 jobs
    const toggleShowAllJobs = () => {
        setShowAllJobs(!showAllJobs);
    };

    // Calculate the number of jobs in the current tab
    const jobsInCurrentTab = allJobs.filter(job => activeTab === "All" ? true : job.job_category === activeTab);

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="flex space-x-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setShowAllJobs(false); // Reset to display only 4 jobs when changing tabs
                        }}
                        className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"}
                            relative rounded-full px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
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

            <div className="max-w-[1700px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 px-10 mx-auto">
                {jobsInCurrentTab
                    .slice(0, showAllJobs ? jobsInCurrentTab.length : 4) // Conditionally slice based on showAllJobs state
                    .map((job, index) => (
                        <div key={index}>
                            <div key={job._id}>
                                <div className=" font-primary text-black dark:text-white relative bg-slate-100 dark:bg-[#1f2229] rounded-lg drop-shadow-lg ">
                                    <div className="price-tag-shape absolute font-bold top-0 left-0 bg-[#91C96F] text-black dark:text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                                        <span>Applied: {job.applicants_number}</span>
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
                                            <h2 className="text-xl font-semibold truncate mb-2">{job.job_title}</h2>
                                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted By: </span>{job.posted_by}</h2>
                                            <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted: </span>{job.job_posting_date}</h2>
                                            <h2 className="text-sm truncate mb-2"><span className="font-medium">Deadline: </span>{job.application_deadline}</h2>
                                            <h5 className='text-lg font-semibold truncate mb-1'>{job.salary_range}</h5>
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

            {/* Conditionally render the "Show All" or "Show Less" button based on the number of jobs in the current tab */}
            {jobsInCurrentTab.length > 4 && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={toggleShowAllJobs}
                        className="bg-[#91C96F] font-primary font-semibold text- text-white md:px-12 px-7 md:py-4 py-2 rounded">
                        {showAllJobs ? "Show Less" : "Show All"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Jobs;




