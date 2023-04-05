import React, { useState } from 'react';
import { useGetVideoQuery, useGetSingleAssignmentMarkQuery, usePostAssignmentMarkMutation } from '../../../features/apiSlice';
import logo from "../../learningportal.svg";
import { useParams } from 'react-router';
import PlayerTwo from './PlayerTwo';
import { Link } from 'react-router-dom';
import { userLoggedOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Player = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    const { svideoId } = useParams();

    const { data: video, isLoading, isError } = useGetVideoQuery(svideoId);
    const { data: singleAssignmentMark, isLoading2, isError2 } = useGetSingleAssignmentMarkQuery(svideoId);
    // console.log(singleAss
    // const { createdAt, totalmark, student_name, assignment_id, title, student_id } = singleAssignmentMark;
    const [postAssignmentMark, { isLoading3, isSuccess3, isError3 }] = usePostAssignmentMarkMutation();

    const [createdAt] = useState("2021-01-15T15:17:01.727Z");
    const [totalmark] = useState(100);
    const [student_name] = useState('Saad Hasan');
    const [assignment_id] = useState(1);
    const [title] = useState('Assignment 1 - Implement Debounce Function');
    const [student_id] = useState(1)
    const [mark] = useState(0);
    const [status] = useState("pending")
    const [repo_link, setRepolink] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(repo_link, createdAt, totalmark, student_name, mark, title, assignment_id, status, student_id)
        setShowModal(false)
        postAssignmentMark({
            repo_link,
            createdAt,
            totalmark,
            student_name,
            mark,
            title,
            assignment_id,
            status,
            assignment_id
        });

    };


    return (

        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'><img className="h-10"

                        src={logo}

                    /></Link>
                    <div className="flex items-center gap-3">
                        <Link to="/StudentPortal/leaderboard">Leaderboard</Link>
                        <h2 className="font-bold">Saad Hasan</h2>
                        <button
                            onClick={logout}
                            className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                </button>
                    </div>
                </div>
            </nav>

            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        {/* <Player /> */}

                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            {video ?

                                <iframe width="100%" className="aspect-video" src={video.url}
                                    title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                                :
                                <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/56zUkaXJnUA"
                                    title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            }


                            {/* ********************** show modal ****************************************/}
                            {showModal ? (
                                <>
                                    <div
                                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h5 className="text-1xl font-bold">
                                                        Submit Your Assignment
                                                    </h5>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl  block outline-none focus:outline-none">
                                                            ×
                                                      </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <form onSubmit={handleSubmit}
                                                >
                                                    <div className="relative p-6 flex-auto">
                                                        <div>
                                                            <label for="github-address" className="sr-only">Github address</label>
                                                            <input
                                                                value={repo_link}
                                                                onChange={(e) => setRepolink(e.target.value)}
                                                                name="text" type="text" autocomplete="github" required
                                                                className="login-input rounded-t-md" placeholder="Enter your github link" />
                                                        </div>
                                                        {/* <div>
                                                        <label for="email-address" className="sr-only">Web address</label>
                                                        <input
                                                            name="web" type="text" autocomplete="webLink" required
                                                            className="login-input rounded-t-md" placeholder="Enter your web link" />
                                                    </div> */}
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="mt-1 flex items-center justify-end p-6 border-t border-solid gap-4 border-slate-200 rounded-b">
                                                        <button
                                                            // className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Cancel
                                                      </button>
                                                        <button
                                                            // className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                                                            type="submit"
                                                        // onClick={() => setShowModal(false)}
                                                        >
                                                            Submit Assignment
                                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}




                            <div>
                                {
                                    video ? <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                                        {video.title}
                                    </h1> : <>Things I wish i knew as a junior web Developer-Basis SoftExpo</>
                                }
                                {
                                    video ? <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                                        Uploaded on {video.createdAt}
                                        2020</h2> :
                                        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                                            Uploaded on 23 February 2020
                                        </h2>
                                }

                                <div className="flex gap-4">
                                    <button
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                                        // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(true)}


                                    >
                                        এসাইনমেন্ট
                                    </button>

                                    <Link to="/StudentPortal/quiz"
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">কুইজে অংশগ্রহণ করুন
                                    </Link>
                                </div>
                                {
                                    video ? <p>{video.description}</p> :
                                        <p className="mt-4 text-sm text-slate-400 leading-6">
                                            আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ
                                            কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ
                                            পর্যন্ত বুঝতে না
                                            পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি
                                            যেগুলো
                                            বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে
                                            আর কনফিউশন
                                            থাকবেনা।
                                </p>}
                            </div>
                        </div>

                        <PlayerTwo />

                    </div>
                </div>
            </section>
        </div >
    );
};

export default Player;