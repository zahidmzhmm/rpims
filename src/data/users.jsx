import {apiURI, headers} from "./config";

export const importAllUsers = (setUsersData) => {
    fetch(apiURI + 'users', {headers})
        .then(res => res.json())
        .then(json => {
            setUsersData(json.data);
        });
}