import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import PDFDocument from "./PDFDocument";


let tabs = [
    { id: "All", label: "All Jobs" },
    { id: "On Site", label: "On Site" },
    { id: "Remote", label: "Remote" },
    { id: "Part-Time", label: "Part-Time" },
    { id: "Hybrid", label: "Hybrid" },
];



const AppliedJobs = ({ appliedJobs }) => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    let [loading, setLoading] = useState(true); // Add loading state

    // Simulate a delay to show loading screen
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); // You can adjust the delay time as needed
    }, []);

    const handleDownloadPDF = () => {
        const filteredJobs = appliedJobs.filter((job) => activeTab === 'All' ? true : job.job_type === activeTab);
        const PDFComponent = <PDFDocument filteredJobs={filteredJobs} />;
        pdf(PDFComponent).toBlob().then((blob) => {
            const fileURL = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);
            a.href = fileURL;
            a.download = 'applied-jobs.pdf';
            a.click();
            a.remove();
        });
    };



    // Calculate the number of jobs in the current tab
    const filteredJobs = appliedJobs.filter(job => activeTab === "All" ? true : job.job_type === activeTab);

    return (
        <div>
            <div className="">
                {loading ? (
                    <div className='h-[80vh] flex justify-center items-center'>
                        <span className="loading loading-spinner text-[#91C96F] loading-lg"></span>
                    </div>
                ) : (
                    appliedJobs.length > 0 ? (
                        <div>
                            <div className="font-primary max-w-[1700px] w-full py-10 px-10 mx-auto duration-300">
                                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-5 lg:mt-10 my-5 lg:my-10 px-10 duration-300">
                                    <span className="">Applied </span>
                                    <span className="text-[#19a463]">Jobs</span>
                                </h1>
                                <div className="flex items-center justify-center">
                                    <div className="container duration-300">
                                        <div className="w-full flex items-center justify-end px-1 gap-4">
                                            <h3 className="text-xl font-semibold text-black mr-2">Filter by category:</h3>
                                            <div className="">
                                                <select
                                                    className="relative font-primary font-semibold rounded-full px-3 py-1.5 text-base border border-green-200 bg-[#c8e4d8] black outline-sky-400 transition focus-visible:outline-2"
                                                    value={activeTab}
                                                    onChange={(e) => {
                                                        setActiveTab(e.target.value);
                                                    }}
                                                >
                                                    {tabs.map((tab) => (
                                                        <option key={tab.id} value={tab.id}>
                                                            {tab.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button
                                                className="bg-[#19a463] text-white text-sm font-primary font-semibold py-2 px-4 rounded-full shadow-md hover-bg-[#19a463]"
                                                onClick={handleDownloadPDF}
                                            >
                                                Generate PDF
                                            </button>
                                        </div>
                                        <div className="w-full bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                                            <div className="hidden xl:block bg-[#19a4633a] duration-300">
                                                <div className="flex items-center justify-between font-semibold border border-gray-100 px-10 py-5">
                                                    <h5 className="w-full mr-10 ml-12">Company</h5>
                                                    <h5 className="w-full mr-10">Job Title</h5>
                                                    <h5 className="w-full mr-10">Job Type</h5>
                                                    <h5 className="w-full mr-10">Job Category</h5>
                                                    <h5 className="w-full mr-10">Salary Range</h5>
                                                    <h5 className="w-full mr-10">Application Email</h5>
                                                    <h5 className="w-full mr-10">Resume</h5>
                                                </div>
                                            </div>
                                            <div className="flex-1 sm:flex-none">
                                                {filteredJobs.map((job) => (
                                                    <div key={job._id} className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                                                        <img className="h-10 mr-2" src={job.company_logo} alt="" />
                                                        <h5 className="w-full mr-10">{job.company_name}</h5>
                                                        <h5 className="w-full mr-10 text-lg font-semibold line-clamp-2"
                                                            data-tooltip-id="all-job-page-job-title"
                                                            data-tooltip-content={job.job_title}>
                                                            {job.job_title}
                                                        </h5>
                                                        <h5 className="w-full mr-10">{job.job_category}</h5>
                                                        <h5 className="w-full mr-10">{job.job_type}</h5>
                                                        <h5 className="w-full mr-10">{job.salary_range}</h5>
                                                        <h5 className="w-full mr-10">{job.applicant_email}</h5>
                                                        <a href={job.resume} className="w-full">{job.resume}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='h-[80vh] flex flex-col items-center justify-center text-black dark:text-white duration-300'>
                            <p className='text-2xl font-bold font-primary mb-5'>
                                You haven't applied for any jobs yet
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;

