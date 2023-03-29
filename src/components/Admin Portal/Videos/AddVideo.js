import React from 'react';
import { Link } from 'react-router-dom';

const AddVideo = () => {
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
                        //  onSubmit={handleSubmit}
                        className="mt-8 space-y-6" action="#" method="POST" >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div >
                                <label for="video-title" className="sr-only">Video Title</label>
                                <input
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    id="email-address" name="video-title" type="video-title" autocomplete="email" required
                                    className="login-input  rounded-t-md" placeholder="Video Title " />
                            </div>
                            <div>


                                <textarea name="" id="" cols="30" rows="7"
                                    id="email-address" name="video-description"
                                    autocomplete="video-description" required
                                    className="login-input rounded-t-md" placeholder='Video Description' ></textarea>
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