import React from 'react';
import FormEdit from './FormEdit';
import { useGetVideoQuery } from '../../../features/apiSlice';
import { useParams } from 'react-router';

const VideoEdit = () => {
    const { videoId } = useParams();
    const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <div>error...</div>;
    }
    if (!isLoading && !isError && video ?.id) {
        content = <FormEdit video={video} />;
    }
    return (
        <div>
            <section className="py-6 bg-primary h-screen grid place-items-center">
                <div className="mx-auto max-w-md px-5 lg:px-0">
                    <div>
                        {/* <Link to='/'> <img className="h-12 mx-auto" /></Link> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                            Edit the Video
            </h2>
                    </div>
                    {/* <FormEdit /> */}
                    {content}
                </div>
            </section>
        </div>
    );
};

export default VideoEdit;