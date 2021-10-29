import React from 'react';
import {importAllUsers} from "../data/users";
import {apiURI} from "../data/config";
import Loader from "./Loader";

const Teachers = () => {
    const [data, setUsersData] = React.useState(false);
    React.useEffect(() => {
        if (data === false) {
            importAllUsers(setUsersData)
        }
    });
    if (data !== false) {
        return (
            <>
                <div className="w-10/12 mx-auto mb-5">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="shadow overflow-hidden mt-5 border-b border-smooth sm:rounded-lg">
                                <table className="min-w-full divide-y divide-smooth">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider">
                                            <div className="pl-xl-9">Photo/Name</div>
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
                                        person.role == "teacher" && person.featured == 1 &&
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
        );
    } else {
        return Loader;
    }
};

export default Teachers;