import React from 'react';
import logo from "../../learningportal.svg";
import { Link, useParams } from 'react-router-dom';
import { userLoggedOut } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useGetUserQuery, useGetVideosQuery } from '../../../features/apiSlice';
import SidePlayer from './SidePlayer';
import Player from './Player';
const CoursePlayer = () => {
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
    // const { userId } = useParams();
    // const user = useGetUserQuery(userId);
    // const user = userLoggedIn();
    // console.log(user)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };
    return (
        <div>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <Link to='/'><img className="h-10" src={logo} /></Link>
                    <div className="flex items-center gap-3">
                        <a href="./Leaderboard.html">Leaderboard</a>
                        <h2 className="font-bold">Saad Hasan</h2>
                        <button
                            onClick={logout}
                            className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan ">
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
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <Player />
                        <div
                            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
                            {/* <SidePlayer /> */}
                            {content}


                        </div>

                    </div>
                </div>
            </section>

        </div >
    );
};

export default CoursePlayer;