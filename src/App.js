import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import {createContext} from 'react'
import Login from './Components/Authentication/Login';
import {importAllDepartments, importTnsCount} from './data/departments';
import {importAllNotice} from './data/notice';
import {importAllSubject} from './data/subjects';
import {importAllUsers} from "./data/users";
import Notice from "./Components/Notice";
import Result from "./Components/Result";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers";

export const RapperContent = createContext();
export const AllDataContext = createContext();
const App = () => {
    const [authopen, setAuthopen] = React.useState(false);
    const [update, setUpdate] = React.useState(true);
    const [departmentData, setDepartmentData] = React.useState(false);
    const [noticeData, setNoticeData] = React.useState(false);
    const [subjectData, setSubjectData] = React.useState(false);
    const [usersData, setUsersData] = React.useState(false);
    const [tnsCountData, setTnsCountData] = React.useState(false);
    if (update === true) {
        importAllDepartments(setDepartmentData);
        importAllNotice(setNoticeData)
        importAllSubject(setSubjectData)
        importAllUsers(setUsersData)
        importTnsCount(setTnsCountData)
        setUpdate(false);
    }
    if (update === false && departmentData !== false && noticeData !== false && subjectData !== false && usersData !== false && tnsCountData !== false) {
        const allData = {
            departments: departmentData,
            notices: noticeData,
            subjects: subjectData,
            users: usersData,
            tnsCount: tnsCountData
        }
        return (
            <RapperContent.Provider value={{authopen, setAuthopen}}>
                <AllDataContext.Provider value={{allData: allData}}>
                    <Router>
                        <Navbar/>
                        <Login/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/:depName/:routeName" component={Dashboard}/>
                            <Route exact path="/notice" component={Notice}/>
                            <Route exact path="/result" component={Result}/>
                            <Route exact path="/students" component={Students}/>
                            <Route exact path="/teachers" component={Teachers}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </AllDataContext.Provider>
            </RapperContent.Provider>
        )
    } else {
        return "Loading...";
    }
}

export default App
