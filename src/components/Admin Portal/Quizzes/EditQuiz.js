import React from 'react';
import EditForm from './EditForm';
import { useParams } from 'react-router';
import { useGetQuizzeQuery } from '../../../features/apiSlice';

const EditQuiz = () => {
    const { quizzeId } = useParams();
    const { data: quizze, isLoading, isError } = useGetQuizzeQuery(quizzeId);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <div>error...</div>;
    }
    if (!isLoading && !isError && quizze ?.id) {
        content = <EditForm quizze={quizze} />;
    }
    return (
        <div>
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
                        {/* <EditForm /> */}
                        {content}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EditQuiz;