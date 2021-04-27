import "./signup.css"
import React from "react";
import DownloadApp from "../download-app/download-app";
import SignupForm from "../signup-form/signup-form";
import LoginSmall from "../login-small/login-small";

function Signup() {
    return (
        <div>
            <div className="signup-container">
                <div className="text-center">
                    <SignupForm/>
                </div>
            </div>
            <div className="login-prompt-container">
                <div className="text-center">
                    <LoginSmall/>
                </div>
            </div>
            <div className="app-download-container">
                <div className="text-center">
                    <DownloadApp/>
                </div>
            </div>
        </div>
    );
}

export default Signup;
