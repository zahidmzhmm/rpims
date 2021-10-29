import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {importDNotice} from "../../data/notice";
import Loader from "../Loader";

export default function Notices({department}) {
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        if (data === false) {
            importDNotice(department, setData)
            setTimeout(() => {
                setShow(true)
            }, 1000);
        }
    })
    if (data !== false) {
        return (
            <>
                {
                    show === true && data !== false ? <>
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-3">
                                        <div className="shadow overflow-hidden border-b border-smooth sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-smooth">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Info
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
                                                {data.map((notice, index) => (
                                                    <tr key={index}>
                                                        <td className="py-4 whitespace-nowrap">
                                                            <div className="flex items-center">

                                                                <div className="ml-4">
                                                                    <a href="/" target="_blank"
                                                                       className="text-sm d-block mb-2 font-medium text-gray-900">{notice.title}</a>
                                                                    <div
                                                                        className="text-xs text-tcolor">{notice.description}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{notice.created_at}</div>
                                                        </td>
                                                        <td className="pl-6 py-4 whitespace-nowrap">
                                                            <a href={notice.url} target="_blank"
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
                        :
                        <Loader/>
                }

            </>
        )
    } else {
        return Loader;
    }
}

