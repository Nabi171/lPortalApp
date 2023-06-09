import React from 'react';
import logo from "../../learningportal.svg";
import { Link, useNavigate } from 'react-router-dom';
import Quizze from './Quizze';
import { useGetQuizzesQuery } from '../../../features/apiSlice';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../../features/auth/authSlice';
const Quizzes = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/Dashboard/quizzes/addQuizze')
    }
    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <p>loading...</p>
            </>
        );
    }

    if (!isLoading && isError) {
        content = <p>There is an error</p>;

    }

    if (!isLoading && !isError && quizzes ?.length === 0) {
        content = <p>There is no quizzes</p>;
    }

    if (!isLoading && !isError && quizzes ?.length > 0) {
        content = quizzes.map((quizze) => <Quizze key={quizze.id} quizze={quizze} />)

    }

    return (
        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'> <img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">Admin</h2>
                        <button
                            className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
                            <svg
                                onClick={logout}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
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
                <div className="mx-auto max-w-full px-5 lg:px-20">
                    <div className="px-3 py-20 bg-opacity-10">
                        <div className="w-full flex">
                            <button
                                onClick={handleAdd}
                                className="btn ml-auto">Add Quiz</button>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th className="table-th">Question</th>
                                        <th className="table-th">quizze</th>
                                        <th className="table-th justify-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-600/50">

                                    {content}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quizzes;