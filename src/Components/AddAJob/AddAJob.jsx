import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../services/Firebase/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddAJob = () => {

    const { user } = useContext(AuthContext);
    const [PostDate, setPostDate] = useState(new Date());
    const [DeadlineDate, setDeadlineDate] = useState(new Date());

    console.log(user);

    const handleAddJob = event => {
        event.preventDefault();

        const form = event.target;

        const banner_image = form.banner_image.value;
        const company_logo = form.company_logo.value;
        const company_name = form.company_name.value;
        const posted_by = form.posted_by.value;
        const posted_by_email = form.posted_by_email.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const job_type = form.job_type.value;
        const job_location = form.job_location.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const job_posting_date = form.job_posting_date.value;
        const application_deadline = form.application_deadline.value;
        const applicants_number = +form.applicants_number.value;


        const newJob = {
            banner_image,
            company_logo,
            company_name,
            posted_by,
            posted_by_email,
            job_title,
            job_category,
            job_type,
            job_location,
            salary_range,
            job_description,
            job_posting_date,
            application_deadline,
            applicants_number
        };

        if (
            !banner_image ||
            !company_logo ||
            !company_name ||
            !posted_by ||
            !posted_by_email ||
            !job_title ||
            !job_category ||
            !job_type ||
            !job_location ||
            !salary_range ||
            !job_description ||
            !job_posting_date ||
            !application_deadline
        ) {
            Swal.fire({
                title: 'Please fill in all fields!',
                text: 'One or more fields are empty',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        } else {
            // Send data to the server
            
            fetch('https://bd-jobs-server.vercel.app/jobs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newJob)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Job Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                });
        }
    };


    return (
        <div>
            <div className="dark:bg-[#0f1116] bg-[#19a4630c] px-5 md:px-24 py-24 font-primary duration-300">
                <div className='max-w-6xl mx-auto'>
                    <h1 className="text-4xl font-bold text-center mb-16 "><span className="">Please tell us the details about the </span><span className="text-[#19a463]">job</span> you want to post</h1>
                    <form onSubmit={handleAddJob}>
                        {/* Banner Image and Company Logo row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Banner Image</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="banner_image"
                                        placeholder="Banner Image URL"
                                        className="input input-bordered w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:md:ml-4">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Company Logo</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="company_logo"
                                        placeholder="Company Logo URL"
                                        className="input input-bordered w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Company Name and Posted By row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Company Name</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="company_name"
                                        placeholder="Company Name"
                                        className="input input-bordered w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Posted By</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="posted_by"
                                        placeholder="Posted By"
                                        defaultValue={user.displayName}
                                        readOnly
                                        className="input input-bordered text-gray-400 w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Posted By Email and Job Title row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Posted By Email</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="posted_by_email"
                                        placeholder="Posted By Email"
                                        defaultValue={user.email}
                                        readOnly
                                        className="input input-bordered w-full text-gray-400 dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Job Title</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="job_title"
                                        placeholder="Job Title"
                                        className="input input-bordered w-full dark-bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Job Category and Job Type row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="text-black dark-text-slate-300 duration-300">Job Category</span>
                                </label>
                                <label className="rounded-lg ">
                                    <select name="job_category" className="input input-bordered w-full dark:bg-zinc-800 bg-white dark:text-gray-400 duration-300">
                                        <option value="" disabled selected >Select Job Category</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="text-black dark-text-slate-300 duration-300">Job Type</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="job_type"
                                        placeholder="Job Type"
                                        className="input input-bordered w-full dark-bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Job Location and Salary Range row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className="form-control md:w-1/2 mb-4 md:mb-0">
                                <label className="label">
                                    <span className="text-black dark-text-slate-300 duration-300">Job Location</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="job_location"
                                        placeholder="Job Location"
                                        className="input input-bordered w-full dark-bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="text-black dark-text-slate-300 duration-300">Salary Range</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="salary_range"
                                        placeholder="Salary Range"
                                        className="input input-bordered w-full dark-bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Job Posting Date and Application Deadline row */}
                        <div className="md:flex mb-5 md:mb-8">
                            <div className='w-1/2 md:flex '>
                                <div className="form-control  mb-4 md:mb-0">
                                    <label className="label w-full">
                                        <span className="text-black dark-text-slate-300 duration-300">Job Posting Date</span>
                                    </label>
                                    <label className="rounded-lg flex items-center input input-bordered w-full">
                                        <DatePicker
                                            selected={PostDate}
                                            onChange={(date) => setPostDate(date)}
                                            dateFormat="dd-MM-yyyy" // Format as you desire
                                            placeholderText="Application Deadline (YYYY-MM-DD)"
                                            name="job_posting_date"
                                            readOnly
                                            className="w-full  text-gray-400 dark:bg-zinc-800 bg-white duration-300"
                                        />
                                    </label>
                                </div>
                                <div className="form-control md:ml-4">
                                    <label className="label">
                                        <span className="text-black dark-text-slate-300 duration-300">Application Deadline</span>
                                    </label>
                                    <label className="rounded-lg flex items-center input input-bordered w-full">
                                        <DatePicker
                                            selected={DeadlineDate}
                                            onChange={(date) => setDeadlineDate(date)}
                                            dateFormat="dd-MM-yyyy" // Format as you desire
                                            placeholderText="Application Deadline (YYYY-MM-DD)"
                                            name="application_deadline"
                                            className="w-full dark-bg-zinc-800 bg-white duration-300"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="text-black dark-text-slate-300 duration-300">Job Applicants Number</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="number"
                                        name="applicants_number"
                                        defaultValue={0}
                                        placeholder="Job Applicants Number"
                                        className="input input-bordered w-full dark-bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>

                        </div>

                        {/* Job Description row */}
                        <div className="form-control mb-14">
                            <label className="label">
                                <span className="text-black dark-text-slate-300 duration-300">Job Description</span>
                            </label>
                            <label className="rounded-lg">
                                <textarea
                                    name="job_description"
                                    placeholder="Job Description"
                                    className="textarea input-bordered w-full h-40 dark-bg-zinc-800 bg-white duration-300"
                                />
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Add Job"
                            className="btn hover-bg-[#ffc362] w-full text-white text-lg bg-[#19a463] hover:bg-[#19a463bb]"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAJob;
