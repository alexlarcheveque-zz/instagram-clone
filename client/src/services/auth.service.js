import axios from "axios";

const API_SIGNUP = "http://localhost:8000/api/auth/signup";
const API_SIGNIN = "http://localhost:8000/api/auth/signin";

class AuthService {
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    login(username, password) {
        return axios
            .post(API_SIGNIN, {
                username,
                password
            })
            .then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_SIGNIN, {
            username,
            email,
            password
        });
    }
}

export default AuthService;