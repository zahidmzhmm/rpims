import React from 'react';
import {importAllNotice} from "../data/notice";
import Loader from "./Loader";

const Notice = () => {
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        if (data === false) {
            importAllNotice(setData)
        }
    });
    if (data !== false) {
        return (
            <>
                <div className="w-10/12 mx-auto mb-5">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="shadow overflow-hidden mt-5 border-b border-smooth sm:rounded-lg">
                                <table className="min-w-full divide-y divide-smooth">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                            Created Date
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                            Source
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-smooth">
                                    {data.map((data, index) => (
                                        <tr key={index}>
                                            <td className="py-4 whitespace-nowrap">
                                                <div className="text-sm ml-4 text-gray-500">{data.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{data.description}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{data.created_at}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a href={data.url} target="_blank"
                                                   className="text-sm mt-0 d-block ml-3 text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="h-5 w-5 text-first hover:text-second cursor-pointer"
                                                         viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                        <path fillRule="evenodd"
                                                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return Loader;
    }
};

export default Notice;