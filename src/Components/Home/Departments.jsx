import React, {useState} from 'react'
import "./hero.css"
import {Link} from "react-router-dom";
import {AllDataContext} from "../../App";
import {apiURI} from "../../data/config";

const Departments = () => {
    const [more, setMore] = useState([6, true])
    const {allData} = React.useContext(AllDataContext);
    const slicedepart = allData.departments.slice(0, more[0]);
    return (
        <>
            <div className="w-full flex items-center flex-col justify-center mb-5">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        slicedepart.map((item, index) => (
                            <Link to={item.id + "/notice"} key={index} className="overflow-hidden rounded-md relative"
                                  data-aos={item.title}>
                                <img src={apiURI + "uploads/" + item.image}
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                                <div
                                    className="w-full h-full absolute z-10 top-0 left-0 flex flex-col justify-center items-center"
                                    style={{background: 'rgba(0,0,0,0.7)'}}>
                                    <h2 className="top-5 text-uppercase mb-3 text-white font-bold text-3xl">{item.title}</h2>
                                    <p className="text-sm text-capitalize text-second">{item.slogan}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div>
                    {
                        more[1] ?
                            <button onClick={() => setMore([9, false])}
                                    className="px-9 rounded py-2 transition delay-100 ease-in bg-first text-white mt-3 hover:bg-second">
                                See more
                            </button>
                            :
                            <button onClick={() => setMore([6, true])}
                                    className="px-9 rounded py-2 transition delay-100 ease-in bg-second text-white mt-3 hover:bg-first">
                                See less
                            </button>
                    }
                </div>
            </div>
        </>
    )
}

export default Departments
