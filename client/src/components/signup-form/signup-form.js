import React from "react";
import "./signup-form.css";
import AuthService from "../../services/auth.service";

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

const nameValidation= (name) => {
    if (name.trim() === '') {
        return 'Name is required';
    }
    return null;
}

const usernameValidation = (username) => {
    if (username.trim() === '') {
        return 'Username is required';
    }
    return null;
}

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

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            username: "",
            password: "",
            emailValidationText: "",
            nameValidationText: "",
            usernameValidationText: "",
            passwordValidationText: "",
            errorMessage: "",
            successMessage: "",
            isFormValid: false,
        }
    }

    validateForm = () => {
        const isFormValid = emailValidation(this.state.email) === null
            && nameValidation(this.state.name) === null
            && usernameValidation(this.state.username) === null
            && passwordValidation(this.state.password) === null
            && !(this.state.emailValidationText
                && this.state.nameValidationText
                && this.state.usernameValidationText
                && this.state.passwordValidationText);
        this.setState({isFormValid});
    }

    onChangeEmail = event => {
        const email = event.target.value;
        this.setState({email});
        this.setState({emailValidationText: emailValidation(email)}, () => this.validateForm());
    }

    onChangeName = event => {
        const name = event.target.value;
        this.setState({name});
        this.setState({nameValidationText: nameValidation(name)}, () => this.validateForm());
    }

    onChangeUsername = event => {
        const username = event.target.value;
        this.setState({username});
        this.setState({usernameValidationText: usernameValidation(username)}, () => this.validateForm());
    }

    onChangePassword = event => {
        const password = event.target.value;
        this.setState({password});
        this.setState({passwordValidationText: passwordValidation(password)}, () => this.validateForm());
    }

    onSubmitForm = event => {
        event.preventDefault();
        authService.register(this.state.email, this.state.name, this.state.username, this.state.password).then(res => {
            if (res.data === 'Successful signup') {
                this.setState({
                    successMessage: "Successfully created account! Please login.",
                    errorMessage: ""
                });
            } else {
                this.setState({
                    successMessage: "",
                    errorMessage: res.data.toString(),
                });
            }
        }, error => {
            this.setState({
                successMessage: "",
                errorMessage: error.message
            })
        });
    }

    render() {
        return (
            <div className="signup-form-container">
                <div className="row justify-content-center">
                    <div className="col align-self-center">
                        <img src={"/assets/instagram-logo.png"} className="instagram-logo"/>
                    </div>
                </div>
                <h2> Sign up to see photos and videos from your friends. </h2>
                <div className="fb-button-login-container">
                    <button type="submit" className="btn btn-block fb-button-login">
                        <span className="fb-logo-white-container">
                            <img src={"/assets/facebook.png"} className="fb-logo-white"/>
                        </span>
                            Log in with Facebook
                    </button>
                </div>
                <div className="text-strikethrough-container row">
                    <span className="text-strikethrough col"></span>
                    <div className="text-divider col">OR</div>
                    <span className="text-strikethrough col"></span>
                </div>
                <div className="row signup-form justify-content-center">
                    <form className="form-container">
                        <div className="input-fields">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form-control phone-email-input"
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.emailValidationText} </small>
                        </div>
                        <div className="input-fields">
                            <input
                                type="text"
                                name="full-name"
                                placeholder="Full Name"
                                className="form-control name-input"
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.nameValidationText} </small>
                        </div>
                        <div className="input-fields">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="form-control username-input"
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.usernameValidationText} </small>
                        </div>
                        <div className="input-fields">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control password-input"
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <div className="error-text">
                            <small className="text-danger"> {this.state.passwordValidationText} </small>
                        </div>
                        <div className="signup-button-container">
                            <input
                                type="submit"
                                value="Sign up"
                                className="btn btn-primary btn-block signup-button"
                                onClick={this.onSubmitForm}
                                disabled={!this.state.isFormValid}
                            />
                        </div>
                        <small className="text-danger"> {this.state.errorMessage} </small>
                        <small className="text-success"> {this.state.successMessage} </small>
                    </form>
                </div>
                <p className="terms">By signing up, you agree to our
                    <a target="_blank" href="https://help.instagram.com/581066165581870" tabIndex="0">Terms</a>,
                    <a target="_blank" href="https://help.instagram.com/519522125107875" tabIndex="0">Data Policy</a>
                    and <a target="_blank" href="/legal/cookies/" tabIndex="0">Cookies Policy</a> .</p>
            </div>
        );
    }
}

export default SignupForm;
