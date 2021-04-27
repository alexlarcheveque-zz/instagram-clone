import DownloadApp from "../download-app/download-app";
import React from "react";
import LoginForm from "../login-form/login-form";
import SignupSmall from "../signup-small/signup-small";

function Login() {
    return (
        <div>
            <div className="login-container">
                <div className="text-center">
                    <LoginForm/>
                </div>
            </div>
            <div className="login-prompt-container">
                <div className="text-center">
                    <SignupSmall/>
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

export default Login;
