// import { Link } from "react-router-dom";
// import { IoPersonOutline } from 'react-icons/io5';
// import { PiBriefcaseLight } from 'react-icons/pi';
// import { PiCalendarPlusLight } from 'react-icons/pi';
// import { PiCalendarCheckLight } from 'react-icons/pi';
// import { BsCheck2Square } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const AllJobs = ({ allJobs }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(allJobs);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = allJobs.filter((job) =>
            job.job_title.toLowerCase().includes(query)
        );
        setFilteredJobs(filtered);
        setSearchValue(query);
    };

    return (
        <div className="flex flex-col items-center justify-center py-10 bg-[#19a4630c] w-full font-primary">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-5 lg:mt-10 my-5 lg:my-10 px-10 duration-300"><span className="">Find The </span><span className="text-[#19a463]">Perfect </span>Job For You </h1>
            <div className='w-full items-center flex justify-center lg:my-5'>
                <div className="relative" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="bg-white dark:bg-zinc-800 text-black dark:text-white peer block min-h-[auto] w-[80vw] lg:w-[50vw] md:px-12 px-7 md:py-4 py-2 rounded border dark:border-zinc-700 border-stone-200 leading-[1.6] lg:drop-shadow-2xl outline-none transition-all duration-300 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Search Here..."
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="text-lg px-3 md:text-xl pointer-events-none absolute left-3 bottom-[6px] md:bottom-4 mb-[2px] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Type Your Dream Here...
                    </label>
                </div>
            </div>
            <div className="font-primary max-w-[1700px] w-full py-10 px-10 mx-auto duration-300">
                <body className="flex items-center justify-center">
                    <div className="container duration-300">
                        <div className="w-full bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                            <div className="hidden xl:block bg-[#19a4633a] duration-300">
                                <div className="flex items-center justify-between font-semibold border border-gray-100 px-10 py-5">
                                    <h5 className="w-full mr-10 ml-12">Company</h5>
                                    <h5 className="w-full mr-10"> Posted By</h5>
                                    <h5 className="w-full mr-10">Job Title</h5>
                                    <h5 className="w-full mr-10">Job Category</h5>
                                    <h5 className="w-full mr-10">Post Date</h5>
                                    <h5 className="w-full mr-10">Deadline</h5>
                                    <h5 className="w-full mr-10">salary_range</h5>
                                    <h5 className="">Action</h5>
                                    <Tooltip id="all-job-page-job-title" />
                                </div>
                            </div>
                            <div className="flex-1 sm:flex-none">
                                {filteredJobs.map((job) => (
                                    <div key={job._id} className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                                        <img className="h-10 mr-2" src={job.company_logo} alt="" />
                                        <h5 className="w-full mr-10">{job.company_name}</h5>
                                        <h5 className="w-full mr-10">{job.posted_by}</h5>
                                        <h5 className="w-full mr-10 text-lg font-semibold line-clamp-2" data-tooltip-id="all-job-page-job-title" data-tooltip-content={job.job_title}>{job.job_title}</h5>
                                        <h5 className="w-full mr-10">{job.job_type}</h5>
                                        <h5 className="w-full mr-10">{job.job_posting_date}</h5>
                                        <h5 className="w-full mr-10">{job.application_deadline}</h5>
                                        <h5 className="w-full mr-10">{job.salary_range}</h5>
                                        <Link to={`/details/${job._id}`}>
                                            <h5 className="font-bold text-[#19a4639f] hover:text-[#19a463e8]  duration-300">Details</h5>
                                        </Link>
                                        <Tooltip id="all-job-page-job-title" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
};

export default AllJobs;



// import { Link } from "react-router-dom";
// import { IoPersonOutline } from 'react-icons/io5';
// import { PiBriefcaseLight } from 'react-icons/pi';
// import { PiCalendarPlusLight } from 'react-icons/pi';
// import { PiCalendarCheckLight } from 'react-icons/pi';
// import { BsCheck2Square } from 'react-icons/bs';
// import { useState } from "react";


// const AllJobs = ({ allJobs }) => {
//     const [searchValue, setSearchValue] = useState('');
//     const [filteredJobs, setFilteredJobs] = useState(allJobs);

//     // Event handler to update the filter state
//     const handleSearch = (event) => {
//         const query = event.target.value.toLowerCase();
//         const filtered = allJobs.filter((job) =>
//             job.job_title.toLowerCase().includes(query)
//         );
//         setFilteredJobs(filtered);
//         setSearchValue(query);
//     };
//     return (
//         <div className="flex flex-col items-center justify-center py-10 bg-[#19a4630c] font-primary">
//             <h1 className="text-5xl font-bold mt-10 my-6"><span className="">Find The </span><span className="text-[#19a463]">Perfect </span>Job For You </h1>
//             <div className='w-full items-center flex justify-center'>
//                 <div className="relative" data-te-input-wrapper-init>
//                     <input
//                         type="text"
//                         className="bg-slate-100 dark:bg-zinc-800 text-black dark:text-white peer block min-h-[auto] w-[40vw] md:px-12 px-7 md:py-4 py-2 rounded-l border dark:border-zinc-700 border-stone-200 bg-opacity-90 leading-[1.6] outline-none transition-all duration-300 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                         id="exampleFormControlInput1"
//                         placeholder="Search Here..."
//                         value={searchValue}
//                         onChange={handleSearch}
//                     />
//                     <label
//                         htmlFor="exampleFormControlInput1"
//                         className="text-lg md:text-xl pointer-events-none absolute left-3 bottom-[6px] md:bottom-4 mb-[2px] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                     >Search Here...
//                     </label>
//                 </div>
//                 <div>
//                     <button
//                         className="bg-[#19a463bb] hover:bg-[#19a4639f] font-primary font-semibold text-xl text-white md:px-12 px-7 md:py-4 py-2 rounded-r"
//                     >
//                         Search
//                     </button>
//                 </div>
//             </div>
//             <div className="font-primary max-w-[1700px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 px-10 mx-auto">
//                 {filteredJobs.map((job) => (
//                     <div key={job._id}>
//                         <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-1">
//                             <div className="flex items-center px-6 py-3 bg-[#6fb696]">
//                                 <img className="h-10" src={job.company_logo} alt="" />
//                                 <h1 className="mx-3 text-white font-semibold text-lg">{job.company_name}</h1>
//                             </div>
//                             <div className="py-4 px-6 border-b-2 border-slate-100">
//                                 <h1 className="text-2xl font-bold mb-1 max-w-sm truncate flex items-center"> <span></span>{job.job_title}</h1>
//                                 <p className="my-2 mb-3 text-lg text-gray-700 line-clamp-3">{job.job_description}</p>
//                                 <div className="bg-white w-full ">
//                                     <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><IoPersonOutline /></span> <span className="font-medium mr-2">Posted by:</span> {job.posted_by}</h2>
//                                     <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiBriefcaseLight /></span> <span className="font-medium mr-2">Job Category: </span> {job.job_category}</h2>
//                                     <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarPlusLight /></span> <span className="font-medium mr-2"> Posting Date:</span> {job.job_posting_date}</h2>
//                                     <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarCheckLight /></span> <span className="font-medium mr-2">Application Deadline:</span> {job.application_deadline}</h2>
//                                     <h2 className="text-base mb-5 truncate flex items-center"> <span className="mr-2"><BsCheck2Square /></span> <span className="font-medium mr-2">Job Applicants:</span> {job.applicants_number}</h2>
//                                     <h2 className="text-xl font-semibold truncate flex items-center">{job.salary_range}</h2>
//                                 </div>
//                             </div>
//                             <Link >
//                                 <button
//                                     className='font-primary text-sm font-medium px-7 py-3 w-full bg-white hover:text-[#91C96F] duration-300 '>
//                                     SHOW DETAILS
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     );
// };

// export default AllJobs;


{/* <div>
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
            <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
            </svg>
            <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
        </div>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-gray-800">Patterson johnson</h1>
            <p className="py-2 text-lg text-gray-700">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
            <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                </svg>
                <h1 className="px-2 text-sm">MerakiTeam</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                </svg>
                <h1 className="px-2 text-sm">California</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                </svg>
                <h1 className="px-2 text-sm">patterson@example.com</h1>
            </div>
        </div>
    </div>
</div> */}