import React from 'react';
const SingleAssignment = ({ assignment }) => {
    const { student_name, title, createdAt, totalMark, repo_link, mark, status } = assignment;
    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{createdAt}</td>
            <td className="table-td">{student_name}</td>
            <td className="table-td">{repo_link}</td>
            <td className="table-td input-mark">
                <input max="100" value={mark} />
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