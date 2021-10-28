import {apiURI, headers} from "./config";

export const importAllNotice = (setDepartmentData) => {
    fetch(apiURI + 'noticeAll', {headers})
        .then(res => res.json())
        .then(json => {
            setDepartmentData(json.data);
        });
}
export const importDNotice = (departmentId, setData) => {
    fetch(apiURI + 'notice?departmentId=' + departmentId, {headers})
        .then(res => res.json())
        .then(json => {
            setData(json.data);
        });
}