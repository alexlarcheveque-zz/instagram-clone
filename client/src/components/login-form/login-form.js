import React from "react";
import "./login-form.css";
import AuthService from "../../services/auth.service";
import { Redirect } from "react-router";

const authService = new AuthService();

const emailValidation = (email) => {
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.trim() === '') {
        return 'Email is required';
    }
    if (!validEmail.test(email)) {
        return 'Please enter a valid email';
    }
    return null;
};

const passwordValidation = (password) => {
    const minPasswordLength = 6;
    if (password.trim === '') {
        return 'Password is required';
    }
    if (password.length <= minPasswordLength) {
        return `Password must be more than ${minPasswordLength} characters`;
    }
    return null;
};

const validate = {
    email: emailValidation,
    password: passwordValidation
};

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            emailValidationText: "",
            password: "",
            passwordValidationText: "",
            isFormValid: false,
            isLoggedIn: false,
            errorMessage: ""
        };
    }

    validateForm = () => {
        const isFormValid = passwordValidation(this.state.password) === null
            && emailValidation(this.state.email) === null
            && !(this.state.emailValidationText && this.state.passwordValidationText);
        this.setState({isFormValid});
    }

    onChangeEmail = event => {
        const email = event.target.value;
        this.setState({email});
        this.setState({emailValidationText: emailValidation(email)}, () => this.validateForm());
    }

    onChangePassword = event => {
        const password = event.target.value;
        this.setState({password});
        this.setState({passwordValidationText: passwordValidation(password)}, () => this.validateForm());
    }

    onSubmitForm = event => {
        event.preventDefault();
        authService.login(this.state.email, this.state.password).then(res => {
            if (res.data === 'Successful login') {
                this.setState({isLoggedIn: true});
            } else {
                this.setState({errorMessage: res.toString()});
            }
            }, error => {
            this.setState({
                isLoggedIn: false,
                errorMessage: error.message
            })
        });
    }

    render() {
        return this.state.isLoggedIn ?
            <Redirect to="/feed" /> :
            (
            <div className="align-items-center">
                <div className="row logo justify-content-center">
                    <div className="col align-self-center">
                        <img src={"/assets/instagram-logo.png"} className="instagram-logo"/>
                    </div>
                </div>
                <div className="row password-form justify-content-center">
                    <form className="form-container">
                        <div className="input-fields">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form-control email"
                                onChange={this.onChangeEmail}
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.emailValidationText} </small>
                        </div>
                        <div className="input-fields">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control password"
                                onChange={this.onChangePassword}
                                required
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.passwordValidationText} </small>
                        </div>
                        <div className="login-button-container">
                            <input
                                type="button"
                                value="Log in"
                                className="btn btn-primary btn-block login-button"
                                onClick={this.onSubmitForm}
                                disabled={!this.state.isFormValid}
                            />
                        </div>
                    </form>
                </div>
                <div className="text-strikethrough-container row">
                    <span className="text-strikethrough col"></span>
                    <div className="text-divider col">OR</div>
                    <span className="text-strikethrough col"></span>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-block fb-login">
                        <span>
                            <img src={"/assets/facebook.png"} className="fb-logo"/>
                        </span>
                        Log in with Facebook
                    </button>
                </div>
                <div className="error-text">
                    <small className="text-danger"> {this.state.errorMessage} </small>
                </div>
                <div className="row">
                    <div className="col forgot-password"> <a>Forgot password?</a> </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
