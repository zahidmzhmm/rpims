import React from 'react';
import {Link} from "react-router-dom";
import {mainURI} from "../../config";

const Header = ({websiteInfos}) => {
    return (
        <>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-header">
                        <a className="navbar-brand py-0">
                            <img style={{width: '70%'}} src={mainURI + websiteInfos.header_logo} alt=""/>
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-md-0">
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={mainURI + websiteInfos.favicon} alt="user" className="profile-pic"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right scale-up"
                                     style={{width: "6rem", overflow: "hidden", right: "3px", marginLeft: "auto"}}>
                                    <ul className="dropdown-user">
                                        <li><Link to="/logout"><i className="fa fa-power-off"/> Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;