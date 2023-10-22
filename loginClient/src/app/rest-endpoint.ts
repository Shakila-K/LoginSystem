const root="http://localhost:8080";

export const ENDPOINTS = {

        LOGIN:`${root}/authenticate`,
        GETINFO: `${root}/getUser/`,
        UPDATE:`${root}/editUser`,
        CREATE:`${root}/addUser`
}