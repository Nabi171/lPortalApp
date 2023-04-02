import React from 'react';
import EditForm from './EditForm';

const EditQuiz = () => {
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
                        <EditForm />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EditQuiz;