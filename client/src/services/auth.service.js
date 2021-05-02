import axios from "./axios";

const API_AUTHENTICATE = "/api/auth/authenticate";
const API_SIGNUP = "/api/auth/signup";
const API_LOGIN = "/api/auth/login";

class AuthService {
    getCurrentUser = (token) => {
        return axios.get(API_AUTHENTICATE, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
    }

    register = (email, name, username, password) => {
        return axios.post(API_SIGNUP, {
            email,
            name,
            username,
            password
        });
    }

    login = (email, password) => {
        return axios.post(API_LOGIN, {
                email,
                password
            });
    }

    logout = () => {
        localStorage.removeItem('token');
    }
}

export default AuthService;