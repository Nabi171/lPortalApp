import React from 'react';
import logo from "../../learningportal.svg";
import { Link, useParams } from 'react-router-dom';
import { userLoggedOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../../features/apiSlice';
import SidePlayer from './SidePlayer';
const CoursePlayer = () => {
    // const { userId } = useParams();
    // const user = useGetUserQuery(userId);
    // const user = userLoggedIn();
    // console.log(user)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    return (
        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'><img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <a href="./Leaderboard.html">Leaderboard</a>
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
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/56zUkaXJnUA"
                                title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>

                            <div>
                                <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                                    Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023
                        </h1>
                                <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                                    Uploaded on 23 February
                            2020</h2>

                                <div className="flex gap-4">
                                    <a href="#"
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                        এসাইনমেন্ট
                            </a>

                                    <a href="./Quiz.html"
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">কুইজে
                                        অংশগ্রহণ
                                করুন</a>
                                </div>
                                <p className="mt-4 text-sm text-slate-400 leading-6">
                                    আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ
                                    কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ
                                    পর্যন্ত বুঝতে না
                                    পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি
                                    যেগুলো
                                    বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে
                                    আর কনফিউশন
                                    থাকবেনা।
                        </p>


                            </div>
                        </div>

                        <div
                            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
                            <SidePlayer />
                            <SidePlayer />
                        </div>

                    </div>
                </div>
            </section>

        </div >
    );
};

export default CoursePlayer;