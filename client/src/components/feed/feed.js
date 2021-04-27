import React from "react";
import "./feed.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AuthService from "../../services/auth.service";

class Feed extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            currentUser: null,
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        this.isUserAuthenticated(user);
    }

    isUserAuthenticated(user) {
        if (user) {
            this.setState({
                isLoggedIn: true,
                currentUser: user
            })
        }
    }

    logoutUserAndRedirectToHome() {
        AuthService.logout();
        // TODO: redirect user to home page
    }

    // TODO: THIS NEEDS TO BE DYNAMIC
    render() {
        return (
            <div className="justify-content-center">
                <h1>Welcome to your Instagram feed!</h1>
                <div className="list-container">
                    <ul>
                        <li> Email: {this.state.currentUser.email} </li>
                        <li> Full Name: {this.state.currentUser.fullName}</li>
                        <li> Username: {this.state.currentUser.username}</li>
                        <li> Password: {this.state.currentUser.password}</li>
                    </ul>
                </div>
                <div className="signout-container">
                    <button className="btn btn-block btn-danger" type="submit" onSubmit={this.logoutUserAndRedirectToHome()}/>
                </div>
            </div>
        );
    }
}

export default Feed;
