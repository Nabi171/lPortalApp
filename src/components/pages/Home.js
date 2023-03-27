import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../lws.svg";
const Home = () => {
    return (
        <div>
            {/* <!-- Navigatin Bar. It contains Logo, Center Text And Save Progress Button at the end --> */}
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <img className="h-10" src={logo} />
                </div>
            </nav>

            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0 ">
                    <h1 className="text-4xl font-bold my-4 text-center">You can go to other pages from here</h1>

                    <div className="grid grid-cols-2 gap-5 mt-8">
                        <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
                            <h1 className="text-slate-100 font-bold text-xl">Student Portal</h1>
                            <div className="space-y-2 mt-4 flex flex-col">
                                <a className="link" href="./StudentPortal/Course Player.html">Course Player</a>
                                <a className="link" href="./StudentPortal/Leaderboard.html">Leaderboard</a>
                                <a className="link" href="./StudentPortal/Quiz.html">Quiz</a>
                                <Link className="link" to="/StudentPortal/login">StudentLogin</Link>
                                <a className="link" href="./StudentPortal/StudentReistration.html">StudentReistration</a>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
                            <h1 className="text-slate-100 font-bold text-xl">Admin Portal</h1>
                            <div className="space-y-2 mt-4 flex flex-col">
                                <a className="link" href="./Dashboard/Dashboard.html">Dashboard</a>
                                <a className="link" href="./Dashboard/AdminLogin.html">AdminLogin</a>
                                <a className="link" href="./Dashboard/Assignment.html">Assignment</a>
                                <a className="link" href="./Dashboard/AssignmentMark.html">AssignmentMark</a>
                                <a className="link" href="./Dashboard/Quizzes.html">Quizzes</a>
                                <a className="link" href="./Dashboard/Videos.html">Videos</a>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
                            <h1 className="text-slate-100 font-bold text-xl">Admin Email</h1>
                            <div className="space-y-2 mt-4 flex flex-col">
                                <p>Email : admin@learnwithsumit.com</p>
                                <p>Password : lws@123456</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
                            <h1 className="text-slate-100 font-bold text-xl">Student Email</h1>
                            <div className="space-y-2 mt-4 flex flex-col">
                                <p>Email : akash.ahmed@learnwithsumit.com</p>
                                <p>Email : md.salahuddin@learnwithsumit.com</p>
                                <p>Email : ferdous.shohag@learnwithsumit.com</p>
                                <p>Email : riyadh.vai@learnwithsumit.com</p>
                                <p>Email : saad.hasan@learnwithsumit.com</p>
                                <p>Password : lws@123456</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;