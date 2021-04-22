import React from "react";
import "./download-app.css";

function DownloadApp() {
    return (
        <div className="container">
            <div className="app-text-container">
                <p> Get the app.</p>
            </div>
            <div className="app-download-container">
                <a className="app-download-link"
                   href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                   target="_blank"
                   tabIndex="0">
                    <img src={"/assets/itunes-download.png"} className="itunes-download"/>
                </a>
                <a className="app-download-link"
                   href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D76C1289B-DB9C-483D-9420-C2EF32BB16FF%26utm_content%3Dlo%26utm_medium%3Dbadge"
                   target="_blank"
                   tabIndex="0">
                    <img src={"/assets/google-play-download.png"} className="google-play-download"/>
                </a>
            </div>
        </div>
    );
}

export default DownloadApp;
