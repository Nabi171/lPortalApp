import React, { useState } from 'react';
import { useAddAssignmentMutation } from '../../../features/apiSlice';
import { useNavigate } from 'react-router';

const Addassignment = () => {
    const [addAssignment, { isLoading, isSuccess, isError }] = useAddAssignmentMutation();
    const [title, setTitle] = useState("");
    const [video_title, setVideoTitle] = useState("");
    const [totalMark, SetTotalMark] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        addAssignment({
            title,
            video_title,
            totalMark
        });
        navigate('/Dashboard/assignment')
    };

    return (
        <div>
            <div>
                <section className="py-6 bg-primary h-screen grid place-items-center">
                    <div className="mx-auto max-w-md px-5 lg:px-0">
                        <div>
                            {/* <Link to='/'> <img className="h-12 mx-auto" /></Link> */}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                                Add a New Assignment
            </h2>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-6" action="#" method="POST" >
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div >
                                    <label for="title" className="sr-only">Video Title</label>
                                    <input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title" name="title" type="text" autocomplete="title" required
                                        className="login-input  rounded-t-md" placeholder="Assignment Title " />
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
                                    <label for="video-Views" className="sr-only">Video Views</label>
                                    <input
                                        value={views}
                                        onChange={(e) => setViews(e.target.value)}
                                        id="views" name="views" type="text" autocomplete="views" required
                                        className="login-input  rounded-t-md" placeholder="Video views " />
                                </div>
                                <div >
                                    <label for="video-duration" className="sr-only">Video Duration</label>
                                    <input
                                        value={totalMark}
                                        onChange={(e) => SetTotalMark(e.target.value)}
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
        </div>
    );
};

export default Addassignment;