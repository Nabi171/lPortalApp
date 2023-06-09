import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAddVideoMutation } from '../../../features/apiSlice';

const AddVideo = () => {
    const [addVideo, { isLoading, isSuccess, isError }] = useAddVideoMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [views, setViews] = useState("");
    const [duration, setDuration] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        addVideo({
            title,
            description,
            url,
            views,
            duration,
            createdAt
        });
        navigate('/Dashboard/videos')
    };
    return (
        <div>
            <section className="py-6 bg-primary h-screen grid place-items-center">
                <div className="mx-auto max-w-md px-5 lg:px-0">
                    <div>
                        {/* <Link to='/'> <img className="h-12 mx-auto" /></Link> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                            Add a New Video
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
                                    className="login-input  rounded-t-md" placeholder="Video Title " />
                            </div>
                            <div>


                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="" id="" cols="30" rows="7"
                                    id="description" name="description"
                                    autocomplete="description" required
                                    className="login-input rounded-t-md" placeholder='Video Description' ></textarea>
                            </div>
                            <div >
                                <label for="video-url" className="sr-only">Video Url</label>
                                <input
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    id="url" name="url" type="text" autocomplete="url" required
                                    className="login-input  rounded-t-md" placeholder="Video Url " />
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
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    id="duration" name="duration" type="text" autocomplete="duration" required
                                    className="login-input  rounded-t-md" placeholder="Video duration " />
                            </div>
                            <div >
                                <label for="createdAt" className="sr-only">Video Created</label>
                                <input
                                    value={createdAt}
                                    onChange={(e) => setCreatedAt(e.target.value)}
                                    id="createdAt" name="createdAt" type="date"
                                    value="2023-04-15"
                                    autocomplete="date" required
                                    className="login-input  rounded-t-md" />
                            </div>
                        </div>



                        <div>
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                                Add Video
                </button>
                        </div>
                        {/* {error !== "" && <p>{error}</p>} */}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddVideo;