import React from 'react';

const LeaderBoardTable = ({ fm }) => {
    const { id, student_name, mark } = fm;
    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">4</td>
            <td className="table-td text-center">{student_name}</td>
            <td className="table-td text-center">00</td>
            <td className="table-td text-center">{mark}</td>
            <td className="table-td text-center">{mark}</td>
        </tr>
    );
};

export default LeaderBoardTable;