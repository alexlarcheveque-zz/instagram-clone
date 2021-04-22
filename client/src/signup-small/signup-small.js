import React from "react";
import "./signup-small.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Signup from "../signup/signup";

function SignupSmall() {
    return (
            <div>
                <div className="container-fluid">
                    <div className="row signup justify-content-center">
                        <p>Don't have an account? <Link to="/signup"><span className="signup-text">Sign up</span></Link></p>
                    </div>
                </div>
                <Router>
                    <Route exact path="/signup" component={Signup}/>
                </Router>
            </div>
    );
}

export default SignupSmall;
