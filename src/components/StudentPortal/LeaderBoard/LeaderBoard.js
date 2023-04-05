import React from 'react';
import logo from "../../learningportal.svg";
import { Link, useParams } from 'react-router-dom';
import { useGetAssignmentMarkQuery, useGetSingleAssignmentMarkQuery, useGetSingleQuizMarkQuery } from '../../../features/apiSlice';
import LeaderBoardTable from './LeaderBoardTable';
const LeaderBoard = () => {
    const { leaderbordId } = useParams();
    const { data: SingleassignmentMark, isLoading2, isError2 } = useGetSingleAssignmentMarkQuery(leaderbordId);
    const { data: SingleQuizMark, isLoading3, isError3 } = useGetSingleQuizMarkQuery(leaderbordId);
    // console.log(SingleassignmentMark)
    const { data: assignmentMark, isLoading, isError } = useGetAssignmentMarkQuery();
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

    if (!isLoading && !isError && assignmentMark ?.length === 0) {
        content = <p>There is no assignmentMark</p>;
    }

    if (!isLoading && !isError && assignmentMark ?.length > 0) {

        const filteredPublish = assignmentMark ?.filter((pb) => pb.status == "published");

        const filtersMark = filteredPublish.sort((a, b) => b.mark - a.mark);
        content = filtersMark.map((fm) => <LeaderBoardTable key={fm.id} fm={fm} />)
    }



    return (
        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'>  <img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <Link className="font-bold">Leaderboard</Link>
                        <h2>{SingleassignmentMark ?.student_name}</h2>
                        <button
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
                    <div>
                        <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
                        <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                            <thead>
                                <tr>
                                    <th className="table-th !text-center">Rank</th>
                                    <th className="table-th !text-center">Name</th>
                                    <th className="table-th !text-center">Quiz Mark</th>
                                    <th className="table-th !text-center">Assignment Mark</th>
                                    <th className="table-th !text-center">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-2 border-cyan">
                                    <td className="table-td text-center font-bold">3</td>
                                    <td className="table-td text-center font-bold">{SingleassignmentMark ?.student_name}</td>
                                    {SingleQuizMark ? <td className="table-td text-center font-bold">{SingleQuizMark ?.mark}</td>
                                        : <td className="table-td text-center font-bold">0</td>
                                    }
                                    <td className="table-td text-center font-bold">{SingleassignmentMark ?.mark}</td>
                                    {SingleQuizMark ? <td className="table-td text-center font-bold">{parseInt(SingleassignmentMark ?.mark) + parseInt(SingleQuizMark ?.mark)}</td>
                                        : <td className="table-td text-center font-bold">{parseInt(SingleassignmentMark ?.mark) + parseInt(0)}</td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="my-8">
                        <h3 className="text-lg font-bold">Top 20 Result</h3>
                        <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                            <thead>
                                <tr className="border-b border-slate-600/50">
                                    <th className="table-th !text-center">Rank</th>
                                    <th className="table-th !text-center">Name</th>
                                    <th className="table-th !text-center">Quiz Mark</th>
                                    <th className="table-th !text-center">Assignment Mark</th>
                                    <th className="table-th !text-center">Total</th>
                                </tr>
                            </thead>
                            {content}
                            <tbody>

                            </tbody>
                        </table>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default LeaderBoard;