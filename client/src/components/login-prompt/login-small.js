import React from "react";
import "./login-small.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "../login/login";

function LoginSmall() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <p>Don't have an account? <Link to="/login"><span className="login-text">Log in</span></Link></p>
                </div>
            </div>
            <Router>
                <Route exact path="/login" component={Login}/>
            </Router>
        </div>
    );
}

export default LoginSmall;
