import React, { useContext, useState } from 'react';
import Logo from '/BDJobsLogo.png';
import { Input, Ripple, initTE } from "tw-elements";
import { AuthContext } from '../../services/Firebase/AuthProvider';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

initTE({ Input, Ripple });

const Register = () => {
    const { signUp, googleSignIn } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
            setError("Error: Password must be at least 6 characters in length, must contain a capital letter and a special character");
        } else {
            setError("");
            if (email) {
                try {
                    await signUp(email, password, name, photoUrl);
                    swal({
                        title: "Congratulations!",
                        text: "Registration successful!",
                        icon: "success",
                        button: "Okay",
                    });
                } catch (error) {
                    console.error("Registration error:", error);
                    setError("Registration error: " + error.message);
                }
            }
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                <section className="gradient-form h-full dark:bg-neutral-700 font-primary">
                    <div className="h-full">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                            <div className="w-full">
                                <div className="block rounded-lg bg-slate-100 border-b border-b-neutral-200 dark:border-0 dark:bg-[#19191b]">
                                    <div className="g-0 lg:flex lg:flex-wrap">
                                        <div
                                            className="flex items-center rounded-b-none lg:w-6/12 lg:rounded-l-lg lg:rounded-bl-lg"
                                            style={{
                                                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/rHck9hp/test1000px.png")',
                                                backgroundSize: 'cover',
                                            }}
                                        >
                                            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                                <h4 className="mb-6 text-xl font-semibold">
                                                    We are more than just a company!
                                                </h4>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-4 md:px-0 lg:w-6/12">
                                            <div className="md:mx-6 md:p-12">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto h-40"
                                                        src={Logo}
                                                        alt="logo" />
                                                    <h4 className="mb-12 mt-1 pb-1 text-2xl font-semibold text-black dark:text-neutral-100 duration-300">
                                                        BD JOBS
                                                    </h4>
                                                </div>

                                                <form>
                                                    <p className="mb-4 text-black dark:text-neutral-100 duration-300">Please register an account</p>
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            onChange={(event) => setName(event.target.value)}
                                                            type="text"
                                                            className="bg-slate-200 dark:bg-zinc-800  text-white peer block min-h-[auto] w-full rounded border dark:border-zinc-700 border-stone-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Name" />
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Name
                                                        </label>
                                                    </div>
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            onChange={(event) => setEmail(event.target.value)}
                                                            type="email"
                                                            className="bg-slate-200 dark:bg-zinc-800  text-white peer block min-h-[auto] w-full rounded border dark:border-zinc-700 border-stone-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Username" />
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Email
                                                        </label>
                                                    </div>
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            onChange={(event) => setPassword(event.target.value)}
                                                            type="password"
                                                            className="bg-slate-200 dark:bg-zinc-800  text-white peer block min-h-[auto] w-full rounded border dark:border-zinc-700 border-stone-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput11"
                                                            placeholder="Password" />
                                                        <label
                                                            htmlFor="exampleFormControlInput11"
                                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Password
                                                        </label>
                                                    </div>
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <input
                                                            onChange={(event) => setPhotoUrl(event.target.value)}
                                                            type="text"
                                                            className="bg-slate-200 dark:bg-zinc-800  text-white peer block min-h-[auto] w-full rounded border dark:border-zinc-700 border-stone-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Photo URL" />
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >Photo URL
                                                        </label>
                                                    </div>
                                                    <div className="mb-6 pb-1 pt-1 text-center">
                                                        <button
                                                            className=" bg-[#91C96F] rounded mb-4 inline-block w-full px-6 pb-2 pt-2.5 text-sm font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="button"
                                                            onClick={handleRegister}
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                        >
                                                            SIGN UP
                                                        </button>
                                                        <div>
                                                            <p className='text-red-500 my-5 px-20'>{error}</p>
                                                        </div>
                                                        <div className='flex justify-between items-center'>
                                                            <a href="#!" className='text-black dark:text-neutral-100 duration-300'>Terms and conditions</a>
                                                            <button
                                                                type='button'
                                                                onClick={googleSignIn} // Trigger Google sign-in
                                                                className=" px-4 py-2 border-2 flex gap-2 rounded border-slate-300 dark:border-zinc-600 text-neutral-500 dark:text-neutral-300 hover:border-slate-500 hover:text-neutral-500 hover:shadow transition duration-150">
                                                                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                                                <span>Register with Google</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between pb-6">
                                                        <Link to={`/login`}>
                                                            <p className="mb-0 mr-2 text-black dark:text-neutral-100 duration-300">Have an account?</p>
                                                        </Link>
                                                        <Link to={`/login`}>
                                                            <button
                                                                type="button"
                                                                className="text-black dark:text-neutral-100 duration-300 rounded inline-block border-2 border-slate-300 dark:border-zinc-600 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                                data-te-ripple-init
                                                                data-te-ripple-color="light">
                                                                Login
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Register;
