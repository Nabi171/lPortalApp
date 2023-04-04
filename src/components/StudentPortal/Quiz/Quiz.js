import React from 'react';
import logo from "../../learningportal.svg";
import { Link } from 'react-router-dom';
import { useGetQuizzesQuery } from '../../../features/apiSlice';
const Quiz = () => {
    const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
    console.log(quizzes)
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

    // if (!isLoading && !isError && assignmentMark ?.length === 0) {
    //     content = <p>There is no assignmentMark</p>;
    // }

    // if (!isLoading && !isError && assignmentMark ?.length > 0) {
    //     content = assignmentMark.map((assignment) => <SingleAssignment key={assignment.id} assignment={assignment} />)

    // }











    return (
        <div>
            {/* <!-- Navigatin Bar. It contains Logo, Center Text And Save Progress Button at the end --> */}
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'> <img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <h2 className="font-medium">Saad Hasan</h2>
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
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">Quizzes for "Debounce Function in JavaScript - JavaScript Job Interview question"
        </h1>
                        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
                    </div>
                    <div className="space-y-8 ">
                        <div className="quiz">
                            <h4 className="question">Quiz 1 - What is a Debounce function in JavaScript?</h4>
                            <form className="quizOptions">
                                {/* <!-- Option 1 --> */}
                                <label for="option1_q1">
                                    <input type="checkbox" id="option1_q1" />
                                    A function that is called after a certain time interval
            </label>

                                {/* <!-- Option 2 --> */}
                                <label for="option2_q1">
                                    <input type="checkbox" id="option2_q1" />
                                    A function that is called after a certain time interval
            </label>

                                {/* <!-- Option 3 --> */}
                                <label for="option3_q1">
                                    <input type="checkbox" id="option3_q1" />
                                    A function that is called after a certain time interval
            </label>

                                {/* <!-- Option 4 --> */}
                                <label for="option4_q1">
                                    <input type="checkbox" id="option4_q1" />
                                    A function that is called after a certain time interval
            </label>
                            </form>
                        </div>

                        <div className="quiz">
                            <h4 className="question">Quiz 2 - Which of the following is an example of a situation where you would use the
            Debounce function?</h4>
                            <form className="quizOptions">
                                {/* <!-- Option 1 --> */}
                                <label for="option1_q2">
                                    <input type="checkbox" id="option1_q2" />
                                    A search bar where the results are displayed as you type.
            </label>

                                {/* <!-- Option 2 --> */}
                                <label for="option2_q2">
                                    <input type="checkbox" id="option2_q2" />
                                    A button that performs an action when clicked.
            </label>

                                {/* <!-- Option 3 --> */}
                                <label for="option3_q2">
                                    <input type="checkbox" id="option3_q2" />
                                    An animation that plays when a user hovers over an element.
            </label>

                                {/* <!-- Option 4 --> */}
                                <label for="option4_q2">
                                    <input type="checkbox" id="option4_q2" />
                                    All of the above.
            </label>
                            </form>
                        </div>
                    </div>

                    <button
                        className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
                </div>
            </section>
        </div>
    );
};

export default Quiz;