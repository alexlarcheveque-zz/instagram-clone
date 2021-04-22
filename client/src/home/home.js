import "./home.css"
import Login from "../login/login";
import SignupSmall from "../signup-small/signup-small";
import DownloadApp from "../download-app/download-app";
import React from "react";

function Home() {
    return (
        <div className="article-container">
            <div className="row justify-content-center">
                <div className="d-none d-lg-block col-sm-6">
                    <div className="splash-image-container">
                        <div className="mockup-phone">
                            <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"/>
                        </div>
                        <div className="phone-screenshot">
                            <img src={"/assets/splash-picture-1.jpeg"}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 right-container">
                    <div className="login-container text-center">
                        <Login/>
                    </div>
                    <div className="signup-container text-center">
                        <SignupSmall/>
                    </div>
                    <div className="download-app-container text-center">
                        <DownloadApp/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
