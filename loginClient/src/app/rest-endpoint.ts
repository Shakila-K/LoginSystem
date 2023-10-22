const root="http://localhost:8080";

export const ENDPOINTS = {

        //Define the REST Endpoints
        LOGIN:`${root}/authenticate`,
        GETINFO: `${root}/getUser/`,
        UPDATE:`${root}/editUser`,
        CREATE:`${root}/addUser`,
        DELETE:`${root}/deleteUser/`,
        CHECK:`${root}/checkUser/`,
        GETALL:`${root}/getAll`

}