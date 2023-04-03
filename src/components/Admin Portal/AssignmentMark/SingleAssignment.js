import React, { useState } from 'react';
import { useEditAssignmentMarkQuery } from '../../../features/apiSlice';
const SingleAssignment = ({ assignment }) => {
    // const [editAssignmentMark, { isLoading, isError, isSuccess }] =
    //     useEditAssignmentMarkQuery();
    const { student_name, title, createdAt, totalMark, repo_link, mark: initialMark, status } = assignment;
    const [mark, setMark] = useState(initialMark);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     editAssignmentMark({
    //         // id,
    //         data: {
    //             mark,


    //         },
    //     });
    //     // navigate('/Dashboard/quizzes')
    //     window.location.reload();
    // };
    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{createdAt}</td>
            <td className="table-td">{student_name}</td>
            <td className="table-td">{repo_link}</td>
            <td className="table-td input-mark">
                {status == "pending" && <input max="100" value={mark} />}
                {
                    status == "published" && <td className="table-td">{mark}</td>
                }
                {status == "pending" && <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                </svg>}
            </td>
            <td className="table-td">{totalMark}</td>

        </tr>

    );
};

export default SingleAssignment;