import axios from "./axios";

const API_SIGNUP = "/api/auth/signup";
const API_SIGNIN = "/api/auth/login";

class AuthService {
    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    login = (email, password) => {
        return axios.post(API_SIGNIN, {
                email,
                password
            })
            .then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            });
    }

    logout = () => {
        localStorage.removeItem("user");
    }

    register = (email, name, username, password) => {
        return axios.post(API_SIGNUP, {
            email,
            name,
            username,
            password
        });
    }
}

export default AuthService;