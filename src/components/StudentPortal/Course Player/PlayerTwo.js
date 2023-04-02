import React from 'react';
import SidePlayer from './SidePlayer';
import { useGetVideosQuery } from '../../../features/apiSlice';

const PlayerTwo = () => {
    const { data: videos, isLoading, isError } = useGetVideosQuery();

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

    if (!isLoading && !isError && videos ?.length === 0) {
        content = <p>There is no videos</p>;
    }

    if (!isLoading && !isError && videos ?.length > 0) {
        content = videos.map((video) => <SidePlayer key={video.id} video={video} />)

    }
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
            {/* <SidePlayer /> */}
            {content}


        </div>
    );
};

export default PlayerTwo;