import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoPersonOutline } from 'react-icons/io5';
import { PiBriefcaseLight } from 'react-icons/pi';
import { PiCalendarPlusLight } from 'react-icons/pi';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { BsCheck2Square } from 'react-icons/bs';
import { BsCashCoin } from 'react-icons/bs';


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
        <div className="flex flex-col items-center justify-center py-10 bg-[#19a4630c] font-primary">
            <h1 className="text-5xl font-bold mb-10 mt-5"><span className="">Explore job by </span><span className="text-[#19a463]">Categories</span></h1>
            <div className="flex space-x-1 mb-2">
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
                                className="absolute inset-0 z-10 bg-[#19a4637e] mix-blend-multiply"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="max-w-[1700px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 px-10 mx-auto">
                {jobsInCurrentTab
                    .slice(0, showAllJobs ? jobsInCurrentTab.length : 4) // Conditionally slice based on showAllJobs state
                    .map((job, index) => (
                        <div key={index}>
                            <div key={job._id}>
                                <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-1">
                                    <div className="flex items-center px-6 py-3 bg-[#6fb696]">
                                        <img className="h-10" src={job.company_logo} alt="" />
                                        <h1 className="mx-3 text-white font-semibold text-lg">{job.company_name}</h1>
                                    </div>
                                    <div className="py-4 px-6 border-b-2 my-1 border-slate-100">
                                        <h1 className="text-2xl font-bold mb-2 max-w-sm truncate flex items-center"> <span></span>{job.job_title}</h1>
                                        <p className="my-2 mb-4 text-lg text-gray-700 line-clamp-2 ">{job.job_description}</p>
                                        <div className="bg-white w-full ">
                                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><IoPersonOutline /></span> <span className="font-medium mr-2">Posted by:</span> {job.posted_by}</h2>
                                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiBriefcaseLight /></span> <span className="font-medium mr-2">Job Category: </span> {job.job_category}</h2>
                                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarPlusLight /></span> <span className="font-medium mr-2"> Posting Date:</span> {job.job_posting_date}</h2>
                                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarCheckLight /></span> <span className="font-medium mr-2">Application Deadline:</span> {job.application_deadline}</h2>
                                            <h2 className="text-base mb-4 truncate flex items-center"> <span className="mr-2"><BsCheck2Square /></span> <span className="font-medium mr-2">Job Applicants:</span> {job.applicants_number}</h2>
                                            <h2 className="text-xl mb-1 font-semibold truncate flex items-center"><span className="mr-2 -mb-1 text-[#19a463]"><BsCashCoin /></span> {job.salary_range}</h2>
                                        </div>
                                    </div>
                                    <Link to={`/details/${job._id}`}>
                                        <button
                                            className='font-primary text-sm font-medium px-7 py-3 w-full bg-white hover:text-[#91C96F] duration-300 '>
                                            SHOW DETAILS
                                        </button>
                                    </Link>
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
                        className="bg-[#19a4639f] hover:bg-[#19a463bb] font-primary font-semibold text- text-white md:px-12 px-7 md:py-4 py-2 rounded">
                        {showAllJobs ? "Show Less" : "Show All"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Jobs;




