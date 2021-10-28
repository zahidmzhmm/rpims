import React from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {AllDataContext} from "../../App";
import {apiURI} from "../../data/config";

export default function Users({department, role}) {
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState(false);
    const {allData} = React.useContext(AllDataContext);
    React.useEffect(() => {
        if (data === false) {
            setData(allData.users)
            setTimeout(() => {
                setShow(true)
            }, 1000);
        }
    })
    if (data !== false) {
        return (
            <>
                {show ?
                    <>
                        <div className="flex flex-col mt-3">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-smooth sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-smooth">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                                    Description
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-smooth">
                                            {data.map((person) => (
                                                person.role == role && person.department == department && person.featured == 1 &&
                                                <tr key={person.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full"
                                                                     src={person.photo === "" ? apiURI + "uploads/default.jpg" : apiURI + "uploads/" + person.photo}
                                                                     alt=""/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div
                                                                    className="text-sm font-medium text-gray-900">{person.name}</div>
                                                                <div
                                                                    className=" text-tcolor text-xs">{person.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div
                                                            className="text-sm text-gray-900">{person.title.length <= 35 ? person.title : person.title.substring(0, 35) + "..."}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div
                                                            className="text-sm text-tcolor">{person.description.length <= 35 ? person.description : person.description.substring(0, 35) + "..."}</div>
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
