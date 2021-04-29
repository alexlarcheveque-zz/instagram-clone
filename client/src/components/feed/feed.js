import React from "react";
import "./feed.css";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import AuthService from "../../services/auth.service";

const authService = new AuthService();

class Feed extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            email: '',
            name: '',
            username: ''
        }
    }

    componentDidMount() {
        // TODO: Pass in session cookie into parameter, and authenticate user
        const user = authService.getCurrentUser().then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoggedIn: true,
                    email: '',
                    name: '',
                    username: ''
                })
            }
        })
    }

    logoutUserAndRefresh = () => {
        authService.logout();
        this.setState({isLoggedIn: false});
        window.location.reload();
    }

    redirectToLoginPage = () => {
        <Redirect push to="/" />
    }

    render() {
        let header, button, list;
        if (this.state.isLoggedIn) {
            header = <h1>Welcome to your Instagram feed!</h1>;
            button =  <button className="btn btn-block btn-danger" type="button" value="Log out" onClick={this.logoutUserAndRefresh}> Sign Out </button>;
            list =
                `<ul>
                <li> Email: {this.state.email} </li>
                <li> Full Name: {this.state.name}</li>
                <li> Username: {this.state.username}</li>
                </ul>`
        } else {
            header = <h1>Please login.</h1>
            button =  <button className="btn btn-block btn-primary" type="button" value="Log in" onClick={this.redirectToLoginPage}> Log In </button>;
            list = <h2> Sign in to get your Instagram feed! </h2>
        }

        return (
            <div className="justify-content-center">
                <div className="text-center">
                    {header}
                    <div>
                        {list}
                    </div>
                    <div>
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
