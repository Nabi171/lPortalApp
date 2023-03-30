import React from 'react';
import EditForm from './EditForm';
import { useGetAssignmentQuery } from '../../../features/apiSlice';
import { useParams } from 'react-router';

const EditAssignment = () => {
    const { assignmentId } = useParams();
    const { data: assignment, isLoading, isError } = useGetAssignmentQuery(assignmentId);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <div>error...</div>;
    }
    if (!isLoading && !isError && assignment ?.id) {
        content = <EditForm assignment={assignment} />;
    }
    return (
        <div>
            <section className="py-6 bg-primary h-screen grid place-items-center">
                <div className="mx-auto max-w-md px-5 lg:px-0">
                    <div>
                        {/* <Link to='/'> <img className="h-12 mx-auto" /></Link> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                            Edit the Assignment
    </h2>
                    </div>
                    {content}
                </div>
            </section>
        </div>
    );
};

export default EditAssignment;