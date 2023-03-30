import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEditAssignmentMutation } from '../../../features/apiSlice';

const EditForm = ({ assignment }) => {
    const navigate = useNavigate();
    const {
        id,
        title: initialTitle,
        video_title: initialvideoTitle,
        totalMark: initialtotalMark,

    } = assignment;
    const [editAssignment, { isLoading, isError, isSuccess }] =
        useEditAssignmentMutation();

    const [title, setTitle] = useState(initialTitle);
    const [video_title, setVideoTitle] = useState(initialvideoTitle);
    const [totalMark, SetTotalMark] = useState(initialtotalMark);



    const handleSubmit = (e) => {
        e.preventDefault();
        editAssignment({
            id,
            data: {
                title,
                video_title,
                totalMark,

            },
        });
        navigate('/Dashboard/assignment')
        window.location.reload();
    };
    return (
        <div>
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
                        Update
        </button>
                </div>
                {/* {error !== "" && <p>{error}</p>} */}
            </form>
        </div>
    );
};

export default EditForm;