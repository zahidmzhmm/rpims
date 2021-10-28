import React from 'react';
import {AllDataContext} from "../../App";
import {apiURI} from "../../data/config";

const Featured = () => {
    const {allData} = React.useContext(AllDataContext);

    return (
        <div className="bg-third py-8">

            <div className="w-10/12 mx-auto">
                <h2 className="text-ash text-2xl font-medium ">Featured Instructor</h2>
                <p className="text-sm font-medium text-ash w-96 border-r-2 border-first pb-1">They are highly qualified
                    and trained in their areas</p>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5" data-aos="fade-down">
                    {allData.users.map((data, index) => (
                        data.featured == 1 && data.role == "teacher" &&
                        <div key={index} className="flex items-center gap-4 shadow-lg px-3 py-9 mt-0 bg-white">
                            <img
                                src={data.photo !== "" ? apiURI + "uploads/" + data.photo : apiURI + "uploads/default.jpg"}
                                className="rounded-full w-32 h-32" alt=""/>
                            <div>
                                <h1 className="text-2xl font-bold text-second">{data.name}</h1>
                                <h3 className="text-ash mb-2 text-sm">{data.title}</h3>
                                <p className="text-xs text-ash">{data.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
