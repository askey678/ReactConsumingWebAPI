import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8009/Webapi";

class AuthProcServices {

    getAllUsers() {
        return axios.get(API_URL + `/User`, { headers: authHeader() });

    }
    getUserById(key) {
        return axios.get(API_URL + `/User/${key}`, { headers: authHeader() });

    }
    deleteUserByKey(key) {
        return axios.delete(API_URL + `/User/${key}`, { headers: authHeader() });
    }
    updateUserByKey(key, existingUser) {
        return axios.put(API_URL + `/User/${key}`, existingUser, { headers: authHeader() });
    }
    getAllArchivedUsers() {
        return axios.get(API_URL + `/User/ArchivedUsers`, { headers: authHeader() });
    }
    getAllUnArchivedUsers() {
        return axios.get(API_URL + `/User/UnArchivedUsers`, { headers: authHeader() });
    }
    RestoreArchivedUser(key) {
        return axios.put(API_URL + `/User/RestoreUser/${key}`, null, { headers: authHeader() });
    }
    DeleteArchivedUser(key) {
        return axios.delete(API_URL + `/User/DeleteArchived/${key}`, { headers: authHeader() });
    }
    ForceDeleteUser(key) {
        return axios.delete(API_URL + `/User/ForceDelete/${key}`, { headers: authHeader() });
    }
    getListOfRoles() {

        return axios.get(API_URL + '/Role', { headers: authHeader() });
    }
    AddNewRole(role) {
        return axios.post(API_URL + `/Role`, role, { headers: authHeader() });

    }
    getRoleByKey(key) {
        return axios.get(API_URL + `/Role/${key}`, { headers: authHeader() });

    }
    DeleteRoleByKey(key) {
        return axios.delete(API_URL + `/Role/${key}`, { headers: authHeader() });
    }
    updateRoleByKey(key, role) {
        return axios.put(API_URL + `/Role/${key}`, role, { headers: authHeader() });

    }

}

export default new AuthProcServices();