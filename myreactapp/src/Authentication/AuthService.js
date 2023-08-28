import axios from "axios"

const API_URL = 'http://localhost:8009/Webapi'

class AuthService {


    login(email, password) {
       return axios.get(API_URL + `/UserCredential/login?Email=${email}&Password=${password}`);
    }


    register(newUser) {
        return axios.post(API_URL + `/UserCredential/signUp`, newUser);

    }

}

export default new AuthService;