import React, { useState } from 'react';

const AddQuizze = () => {
    const [question, setQuestion] = useState("");
    const [video_title, setVideoTitle] = useState("");
    const [totalMark, SetTotalMark] = useState({
        option: "",
        isCorrect: true
    });
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // addAssignment({
        //     title,
        //     video_title,
        //     totalMark
        // });
        // navigate('/Dashboard/assignment')



        // window.location.reload();
    };
    return (
        <div>
            <section className="py-6 bg-primary h-screen grid place-items-center">
                <div className="mx-auto max-w-md px-5 lg:px-0">
                    <div>
                        {/* <Link to='/'> <img className="h-12 mx-auto" /></Link> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                            Add a New Quizze Portion
    </h2>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6" action="#" method="POST" >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div >
                                <label for="title" className="sr-only">Question</label>
                                <input
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    id="question" name="question" type="question" autocomplete="question" required
                                    className="login-input  rounded-t-md" placeholder="Question " />
                            </div>

                            <div >
                                <label for="video-url" className="sr-only">Video Url</label>
                                <input
                                    value={video_title}
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                    id="video_title" name="video_title" type="text" autocomplete="video_title" required
                                    className="login-input  rounded-t-md" placeholder="Video Title " />
                            </div>

                            <div >
                                <label for="video-duration" className="sr-only">Video Duration</label>
                                <input
                                    // value={totalMark}
                                    // onChange={(e) => SetTotalMark(e.target.value)}
                                    id="totalMark" name="totalMark" type="text" autocomplete="totakMark" required
                                    className="login-input  rounded-t-md" placeholder="Total Mark" />
                            </div>

                        </div>



                        <div>
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                                Add Assignment
        </button>
                        </div>
                        {/* {error !== "" && <p>{error}</p>} */}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddQuizze;