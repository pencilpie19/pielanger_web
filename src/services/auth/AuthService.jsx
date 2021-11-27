import axios from "axios";

export default class AuthService{
    register() {
        return axios.post("http://langer.pencilpie.com/user/register/");
    }

    login() {
        return axios.post("http://langer.pencilpie.com/user/token/");
    }
}