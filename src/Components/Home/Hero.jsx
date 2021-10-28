import React from 'react'
import './hero.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom';
import {RapperContent, AllDataContext} from '../../App';

const Hero = () => {
    React.useEffect(() => {
        Aos.init({
            duration: '2000'
        });
    }, [])
    const {setAuthopen} = React.useContext(RapperContent);
    const {allData} = React.useContext(AllDataContext);
    return (
        <>
            <div className="hero">
                <div className="overlay"/>
                <div className="hero-texts mt-0 lg:mt-16 flex items-center justify-center flex-col">
                    <h1 className="text-2xl lg:text-5xl space-x-1 font-extrabold text-white">RAJSHAHI POLYTECHNIC
                        INSTITUTE</h1>
                    <h2 className="mt-2 text-sm lg:text-2xl space-x-1 font-extrabold text-white">Own your future
                        learning new skills</h2>
                    <div
                        className="grid w-10/12 mt-5 lg:mt-28 grid-cols-1 gap-2 lg:gap-3 md:grid-cols-1 lg:grid-cols-3">
                        <div className="bg-first overflow-hidden px-2 py-2 lg:py-6 py-lg-4 flex" data-aos="fade-right">
                            <div className=" border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">{allData.tnsCount.teacher}</h1>
                            </div>
                            <div className="px-3 text-white flex items-left flex-col justify-center">
                                <h1 className="cursor-pointer">
                                    <Link to="/teachers"
                                          class="text-xl text-light lg:text-3xl font-bold hover:text-second text-uppercase">Total
                                        Teachers</Link>
                                </h1>
                                <p className="cursor-pointer text-sm lg:text-base">See all Teachers</p>
                            </div>
                        </div>
                        <div className="bg-first overflow-hidden px-2 py-2 lg:py-6 py-lg-4 flex" data-aos="flip-left">
                            <div className=" border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">{allData.tnsCount.notice}</h1>
                            </div>
                            <div className="px-3 text-white flex items-left flex-col justify-center">
                                <h1 className="cursor-pointer">
                                    <Link to="/notice"
                                          class="text-xl text-light lg:text-3xl font-bold hover:text-second text-uppercase">Total
                                        Notice</Link>
                                </h1>
                                <p className="cursor-pointer text-sm lg:text-base">check notice</p>
                            </div>
                        </div>
                        <div className="bg-first overflow-hidden px-2 py-2 lg:py-6 py-lg-4 flex" data-aos="fade-left">
                            <div className="border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">{allData.tnsCount.student}</h1>
                            </div>
                            <div className="px-3 text-white flex items-left flex-col justify-center">
                                <h1 className="cursor-pointer">
                                    <a onClick={() => setAuthopen(true)}
                                       className="text-xl text-light lg:text-3xl font-bold hover:text-second text-uppercase">Total
                                        Students </a>
                                </h1>
                                <p onClick={() => setAuthopen(true)}
                                   className="cursor-pointer text-sm lg:text-base">Login or Register</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
