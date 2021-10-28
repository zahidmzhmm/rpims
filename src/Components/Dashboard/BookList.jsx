import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {importBookList} from "../../data/subjects";

export default function BookList({department}) {
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        if (data === false) {
            importBookList(department, setData)
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
                                                        Semester
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Subject
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Subject Code
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Theory
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Practical
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                        Credit
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-smooth">
                                                {data.map((books, index) => (
                                                    <tr key={index}>
                                                        <td className="py-4 whitespace-nowrap">
                                                            <div className="text-sm ml-9 text-gray-500">{books.semester}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{books.name}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{books.code}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{books.theory}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{books.practical}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{books.credit}</div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> :
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <CircularProgress/>
                        </Box>
                }

            </>
        )
    } else {
        return (
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress/>
            </Box>
        )
    }
}

