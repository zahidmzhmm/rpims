import React from 'react'
import {Link} from 'react-router-dom';
import {AllDataContext} from "../App";
import {apiURI} from "../data/config";

const Footer = () => {
    const {allData} = React.useContext(AllDataContext);
    return (
        <div className="bg-ash">
            <div className="w-10/12 mx-auto">
                <div className="w-full py-4 px-2 lg:px-9">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center mt-6">
                        <div>
                            <h1 className="font-bold text-xl text-second mb-3">About RPI</h1>
                            <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut
                                consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
                                mauris</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-second mb-3">Departments</h1>
                            <ul>
                                {allData.departments.map((data, index) => (
                                    <li className="mb-2" key={index}>
                                        <Link to={`${data.id}/notice`} className="text-white">{data.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-second mb-3">Resources</h1>
                            <ul>
                                <li className="mb-2"><Link to={`notice`} className="text-white">Notice</Link></li>
                                <li className="mb-2"><Link to={`result`} className="text-white">Result</Link></li>
                                <li className="mb-2"><Link to={`students`} className="text-white">Students</Link></li>
                                <li className="mb-2"><Link to={`teachers`} className="text-white">Teachers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-second mb-3">Design and Development</h1>
                            <div className="text-sm partner_logo text-white">
                                <a href="https://zahidmzhmm.com" target="_blank">
                                    <p className="mb-2">Faz Group Ltd</p>
                                    <img src={apiURI + "uploads/FazGroupNewLogo.png"} alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
