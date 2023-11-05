import { Link } from "react-router-dom";
import cardTestImg from '../../assets/images/cardTest.png'


const AllJobs = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className=" font-primary text-black dark:text-white relative bg-slate-100 dark:bg-[#1f2229] rounded-lg drop-shadow-lg w-96">
                <div className="price-tag-shape absolute font-bold top-0 left-0 bg-[#91C96F] text-black dark:text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                    <span>Applied: 8</span>
                </div>
                <div>
                    <figure className="relative overflow-hidden rounded-t-lg">
                        <img
                            className='transform hover:scale-110 transition-transform duration-1000 object-cover h-96 w-full'
                            style={{ transformOrigin: 'center center' }}
                            src={cardTestImg}
                            alt=''
                        />
                    </figure>
                </div>
                <div>
                    <div className="py-2 px-4 my-1">
                        <h2 className="font-medium text-lg truncate mb-2">Frontend Web developer</h2>
                        <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted By: </span>Jhanker Mahbub</h2>
                        <h2 className="text-sm truncate mb-1"><span className="font-medium">Posted: </span>01-Nov-2023</h2>
                        <h2 className="text-sm truncate mb-3"><span className="font-medium">Deadline: </span>30-Nov-2023</h2>
                        <h5 className='text-xl font-bold truncate mb-1'> <span>$</span> 500 - 700</h5>
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
    );
};

export default AllJobs;