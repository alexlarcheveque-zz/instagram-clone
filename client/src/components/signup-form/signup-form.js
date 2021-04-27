import React from "react";
import "./signup-form.css";

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {

        }
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
                            <input type="text" name="number-or-email" placeholder="Mobile Number or Email" className="form-control phone-email-input"/>
                        </div>
                        <div className="input-fields">
                            <input type="text" name="full-name" placeholder="Full Name" className="form-control name-input"/>
                        </div>
                        <div className="input-fields">
                            <input type="text" name="username" placeholder="Username" className="form-control username-input"/>
                        </div>
                        <div className="input-fields">
                            <input type="text" name="password" placeholder="Password" className="form-control password-input"/>
                        </div>
                        <div className="signup-button-container">
                            <input type="submit" value="Sign up" className="btn btn-primary btn-block signup-button"/>
                        </div>
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
