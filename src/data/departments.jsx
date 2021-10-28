import {apiURI, headers} from "./config";

export const importAllDepartments = (setDepartmentData) => {
    fetch(apiURI + 'departmentsAll', {headers})
        .then(res => res.json())
        .then(json => {
            setDepartmentData(json.data);
        });
}
export const importTnsCount = (setTnsCountData) => {
    fetch(apiURI + 'tns', {headers})
        .then(res => res.json())
        .then(json => {
            setTnsCountData(json.data);
        });
}