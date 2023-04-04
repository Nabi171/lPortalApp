import React from 'react';

const ShowQuiz = ({ quizze }) => {
    const { id, question, video_id, video_title, options } = quizze;

    return (
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Quizzes for "{question} - JavaScript Job Interview question"
</h1>
                <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
            </div>
            <div className="space-y-8 ">
                <div className="quiz">
                    <h4 className="question">Quiz {id} - {question}</h4>
                    <form className="quizOptions">
                        {/* <!-- Option 1 --> */}

                        {
                            options.map((option) =>
                                <label for="option1_q1">
                                    <input type="checkbox" id="option1_q1" />
                                    {option.option}
                                </label>
                            )
                        }

                        {/* <label for="option1_q1">
                            <input type="checkbox" id="option1_q1" />
                            A function that is called after a certain time interval
                       </label> */}

                        {/* <!-- Option 2 --> */}
                        {/* <label for="option2_q1">
                            <input type="checkbox" id="option2_q1" />
                            A function that is called after a certain time interval
</label> */}

                        {/* <!-- Option 3 --> */}
                        {/* <label for="option3_q1">
                            <input type="checkbox" id="option3_q1" />
                            A function that is called after a certain time interval
</label> */}



                    </form>
                </div>


            </div>

            <button
                className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
        </div>
    );
};

export default ShowQuiz;