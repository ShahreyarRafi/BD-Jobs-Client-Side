import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../services/Firebase/AuthProvider';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const MyJobs = () => {
    const [jobData, setJobData] = useState(null);
    const { user } = useContext(AuthContext);


    const handleDelete = (e, postedJobId) => {
        e.preventDefault();
        console.log(postedJobId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/my-jobs/${postedJobId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            );
                            const remaining = jobData.filter(item => item._id !== postedJobId);
                            setJobData(remaining);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    };



    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/my-jobs/${user.email}`);
            if (response.ok) {
                const data = await response.json();
                setJobData(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {jobData !== null ? (
                jobData.length > 0 ? (
                    <div>
                        <div className="font-primary max-w-[1700px] w-full py-10 px-10 mx-auto duration-300">
                            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-5 lg:mt-10 my-5 lg:my-10 px-10 duration-300"><span className="">Your </span><span className="text-[#19a463]">Jobs</span></h1>
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
                                                <h5 className="w-full ">Update</h5>
                                                <h5 className="">Delete</h5>
                                                <Tooltip id="all-job-page-job-title" />
                                            </div>
                                        </div>
                                        <div className="flex-1 sm:flex-none">
                                            {jobData.map((job) => (
                                                <div key={job._id} className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                                                    <img className="h-10 mr-2" src={job.company_logo} alt="" />
                                                    <h5 className="w-full mr-10">{job.company_name}</h5>
                                                    <h5 className="w-full mr-10">{job.posted_by}</h5>
                                                    <h5 className="w-full mr-10 text-lg font-semibold line-clamp-2" data-tooltip-id="all-job-page-job-title" data-tooltip-content={job.job_title}>{job.job_title}</h5>
                                                    <h5 className="w-full mr-10">{job.job_category}</h5>
                                                    <h5 className="w-full mr-10">{job.job_posting_date}</h5>
                                                    <h5 className="w-full mr-10">{job.application_deadline}</h5>
                                                    <h5 className="w-full mr-10">{job.salary_range}</h5>
                                                    <Link to={`/update-job/${job._id}`}>
                                                        <h5 className="font-bold w-full mr-10 text-[#19a4639f] hover:text-[#19a463e8] duration-300">Update</h5>
                                                    </Link>
                                                    <Link onClick={(e) => handleDelete(e, job._id)}>
                                                        <h5 className="font-bold  text-[#c42c2cc9] hover:text-[#eb4444e8]  duration-300">Delete</h5>
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
                ) : (
                    <div className='h-[80vh] flex flex-col items-center justify-center text-black dark:text-white duration-300'>
                        <p className='text-2xl font-bold font-primary mb-5'>You haven't posted any jobs yet</p>
                        <p className='text-lg font-medium font-primary'>To post a job go to add a job page and fill out all the information and press add job button</p>
                    </div>
                )
            ) : (
                <div className='h-[80vh] flex justify-center items-center'><span className="loading loading-spinner text-[#91C96F] loading-lg"></span></div>
            )}
        </div>
    );
};

export default MyJobs;
