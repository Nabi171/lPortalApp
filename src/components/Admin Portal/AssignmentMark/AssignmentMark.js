import React from 'react';
import logo from "../../learningportal.svg";
import { Link } from 'react-router-dom';
const AssignmentMark = () => {
    return (
        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'> <img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">Admin</h2>
                        <button
                            className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
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
                <div className="mx-auto max-w-full px-5 lg:px-20">
                    <div className="px-3 py-20 bg-opacity-10">
                        <ul className="assignment-status">
                            <li>Total <span>4</span></li>
                            <li>Pending <span>3</span></li>
                            <li>Mark Sent <span>1</span></li>
                        </ul>
                        <div className="overflow-x-auto mt-4">
                            <table className="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th className="table-th">Assignment</th>
                                        <th className="table-th">Date</th>
                                        <th className="table-th">Student Name</th>
                                        <th className="table-th">Repo Link</th>
                                        <th className="table-th">Mark</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-600/50">
                                    <tr>
                                        <td className="table-td">Assignment 1 - Implement Debounce Function</td>
                                        <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                        <td className="table-td">Saad Hasan</td>
                                        <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                        <td className="table-td input-mark">
                                            <input max="100" value="100" />
                                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-td">Assignment 2 - Implement Best Practices</td>
                                        <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                        <td className="table-td">Akash Ahmed</td>
                                        <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                        <td className="table-td">50</td>
                                    </tr>
                                    <tr>
                                        <td className="table-td">Assignment 1 - Scoreboard Application</td>
                                        <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                        <td className="table-td">Ferdous</td>
                                        <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                        <td className="table-td">100</td>
                                    </tr>

                                    <tr>
                                        <td className="table-td">Assignment 1 - Scoreboard Application</td>
                                        <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                        <td className="table-td">Saad Hasan</td>
                                        <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                        <td className="table-td">100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssignmentMark;