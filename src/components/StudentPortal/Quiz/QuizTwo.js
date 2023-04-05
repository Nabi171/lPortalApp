import React from 'react';
import logo from "../../learningportal.svg";
import { Link, useParams } from 'react-router-dom';
import { useGetQuizzeQuery } from '../../../features/apiSlice';
import ShowQuiz from './ShowQuiz';

const QuizTwo = () => {
    const { quizzeId } = useParams();
    const { data: quizze, isLoading, isError } = useGetQuizzeQuery(quizzeId);
    console.log(quizze);
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

    if (!isLoading && !isError && quizze ?.length === 0) {
        content = <p>There is no quizze</p>;
    }

    if (!isLoading && !isError && quizze ?.length > 0) {
        // content = quizzes.map((quizze) => <ShowQuiz key={quizze.id} quizze={quizze} />)
        content = <ShowQuiz quizze={quizze} />
        // const { id, question, video_id, video_title, options } = quizze;
        // const { question, }

    }
    // const { id, question, video_id, video_title, options } = quizze;
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
                {/* <p>{video_title}</p> */}
                {/* {content} */}



                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">Quizzes for "{quizze ?.question} - JavaScript Job Interview question"
</h1>
                        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
                    </div>
                    <div className="space-y-8 ">
                        <div className="quiz">
                            <h4 className="question">Quiz {quizze ?.id} - {quizze ?.question}</h4>
                            <form className="quizOptions">
                                {/* <!-- Option 1 --> */}

                                {
                                    quizze ?.options.map((option) =>
                                        <label for="option1_q1">
                                            <input type="checkbox" id="option1_q1" />
                                            {option.option}
                                        </label>
                                    )
                                }


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

export default QuizTwo;