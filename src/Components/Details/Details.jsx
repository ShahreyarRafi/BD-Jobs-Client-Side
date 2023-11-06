import { IoPersonOutline } from 'react-icons/io5';
import { HiAtSymbol } from 'react-icons/hi';
import { PiBriefcaseLight } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import { PiCalendarPlusLight } from 'react-icons/pi';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { BsCheck2Square } from 'react-icons/bs';
import { BsCashCoin } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../services/Firebase/AuthProvider';
import Swal from 'sweetalert2';

const handleApply = () => {
    const modal = document.getElementById('applyModal');
    if (modal) {
      modal.showModal();
    }
  };
  

const handleSubmit = (event, jobId) => {
    event.preventDefault();

    const form = event.target; // Access the form from the event object

    const applicant_name = form.user_name.value;
    const applicant_email = form.user_email.value;
    const resume = form.resume.value;

    const applicantData = {
        applicant_name,
        applicant_email,
        resume,
        job_id: jobId, 
    };

    if (!applicant_name || !applicant_email || !resume) {
        Swal.fire({
            title: 'Please fill in all fields!',
            text: 'One or more fields are empty',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    } else {
        // Send data to the server

        fetch('http://localhost:5000/applied-jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicantData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Applied!',
                        text: 'You have applied successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
    }
}



const Details = ({ jobDetails }) => {
    const { _id, banner_image, company_logo, company_name, posted_by, posted_by_email, job_title, job_category, job_type, job_location, salary_range, job_description, job_posting_date, application_deadline, applicants_number } = jobDetails || {};

    const { user } = useContext(AuthContext);

    console.log(user);




    return (
        <div>
            <div className="w-full relative bg-black">
                <img className="object-cover overflow-hidden h-[30vh] w-full opacity-40" src={banner_image} alt='' />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className='mx-auto'>
                        <div className='mx-auto'>
                            <h3 className=" w-full lg:text-xl text-3xl mb-2 pl-[2px] font-primary font-medium text-gray-200 duration-300  drop-shadow-lg shadow-black">{job_type}</h3>
                            <div className="flex items-center justify-start gap-5">
                                <h2 className="lg:text-5xl text-4xl font-primary font-semibold text-white duration-300  drop-shadow-lg shadow-black">{job_title}</h2>
                                <div>
                                    <div

                                        className="bg-[#19a463] font-primary font-semibold text-gray-100 px-4 py-3 rounded"
                                    >
                                        {job_category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container flex justify-center items-center mx-auto'>
                <div className='flex gap-10 my-16 max-w-7xl'>
                    <div>
                        <div className="flex items-center border-b border-gray-200 py-5 mb-7">
                            <img className="h-32" src={company_logo} alt="company logo" />
                            <h3 className="text-3xl font-medium">{company_name}</h3>
                        </div>
                        <div>
                            <p className="text-xl leading-9">{job_description}</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-2xl mb-5'>Overview</h5>
                        <div className="w-full bg-[#19a4630c] border border-gray-200 rounded p-10">
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><IoPersonOutline /></span> <span className="font-medium mr-2">Posted by:</span> {posted_by}</h2>
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><HiAtSymbol /></span> <span className="font-medium mr-2">Email:</span> {posted_by_email}</h2>
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiBriefcaseLight /></span> <span className="font-medium mr-2">Job Category: </span> {job_category}</h2>
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><CiLocationOn /></span> <span className="font-medium mr-2">Job Location: </span> {job_location}</h2>
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarPlusLight /></span> <span className="font-medium mr-2"> Posting Date:</span> {job_posting_date}</h2>
                            <h2 className="text-base mb-3 truncate flex items-center"> <span className="mr-2"><PiCalendarCheckLight /></span> <span className="font-medium mr-2">Application Deadline:</span> {application_deadline}</h2>
                            <h2 className="text-base mb-4 truncate flex items-center"> <span className="mr-2"><BsCheck2Square /></span> <span className="font-medium mr-2">Job Applicants:</span> {applicants_number}</h2>
                            <h2 className="text-xl font-semibold truncate flex items-center"><span className="mr-2 -mb-1 text-[#19a463]"><BsCashCoin /></span> {salary_range}</h2>

                            <div className='w-full'>
                                <button
                                    onClick={handleApply}
                                    className="bg-[#19a463] hover:bg-[#19a463bb] font-primary font-semibold text text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded"
                                >
                                    Apply For This Job
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <dialog id="applyModal" className="modal modal-bottom sm:modal-middle font-primary">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">To Apply:</h3>
                    <p className="py-4">Enter your name, email and resume link</p>
                    <form  onSubmit={(event) => handleSubmit(event, jobDetails._id, document.getElementById('applyModal').close())}>
                        <div className=" mb-5">
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Name</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        defaultValue={user.displayName}
                                        className="input input-bordered w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-black dark:text-slate-300 duration-300">Email</span>
                                </label>
                                <label className="rounded-lg">
                                    <input
                                        type="text"
                                        name="user_email"
                                        placeholder="Your Email"
                                        defaultValue={user.email}
                                        className="input input-bordered w-full dark:bg-zinc-800 bg-white duration-300"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* resume row */}
                        <div className="form-control mb-14">
                            <label className="label">
                                <span className="text-black dark-text-slate-300 duration-300">Your Resume</span>
                            </label>
                            <label className="rounded-lg">
                                <textarea
                                    name="resume"
                                    placeholder="Drop your resume link here"
                                    className="textarea input-bordered w-full h-40 dark-bg-zinc-800 bg-white duration-300"
                                />
                            </label>
                        </div>
                        <div className="modal-action flex justify-around">
                            <input
                                type="submit"
                                value="SUBMIT"
                                className="btn bg-[#19a463e8] hover:bg-[#19a4639f] text-white"
                            />
                            <form method="dialog">
                                <button className="btn bg-[#eb4444e8] hover:bg-[#c42c2cc9] text-white" onClick={() => document.getElementById('applyModal').close()}>Cancel</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>


        </div>
    );
};

export default Details;