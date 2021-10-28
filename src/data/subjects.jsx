import {apiURI, headers} from "./config";

export const importAllSubject = (setDepartmentData) => {
    fetch(apiURI + 'subjectsAll', {headers})
        .then(res => res.json())
        .then(json => {
            setDepartmentData(json.data);
        });
}
export const importBookList = (departmentId, setData) => {
    fetch(apiURI + 'subjects?departmentId=' + departmentId, {headers})
        .then(res => res.json())
        .then(json => {
            setData(json.data);
        });
}