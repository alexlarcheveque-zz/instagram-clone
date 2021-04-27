import React from "react";
import "./login-form.css";

function LoginForm() {
    return (
            <div className="align-items-center">
                <div className="row logo justify-content-center">
                    <div className="col align-self-center">
                        <img src={"/assets/instagram-logo.png"} className="instagram-logo"/>
                    </div>
                </div>
                <div className="row password-form justify-content-center">
                    <form className="form-container">
                        <div className="input-fields">
                            <input type="text" name="username" placeholder="Phone number, username, or email" className="form-control username"/>
                        </div>
                        <div className="input-fields">
                            <input type="text" name="password" placeholder="Password" className="form-control password"/>
                        </div>
                        <div className="login-button-container">
                            <input type="submit" value="Log in" className="btn btn-primary btn-block login-button"/>
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
                <div className="row">
                    <div className="col forgot-password"> <a>Forgot password?</a> </div>
                </div>
            </div>
    );
}

export default LoginForm;
