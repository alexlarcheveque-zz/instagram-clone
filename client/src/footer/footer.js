import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <a href="" target="_blank"><span>About</span></a>
                <a href="" target="_blank"><span>Blog</span></a>
                <a href="" target="_blank"><span>Jobs</span></a>
                <a href="" target="_blank"><span>Help</span></a>
                <a href="" target="_blank"><span>API</span></a>
                <a href="" target="_blank"><span>Privacy</span></a>
                <a href="" target="_blank"><span>Top Accounts</span></a>
                <a href="" target="_blank"><span>Hashtags</span></a>
                <a href="" target="_blank"><span>Locations</span></a>
            </div>
            <div className="footer-links">
                <a href="" target="_blank"><span>Beauty</span></a>
                <a href="" target="_blank"><span>Dance & Performance</span></a>
                <a href="" target="_blank"><span>Fitness</span></a>
                <a href="" target="_blank"><span>Food & Drink</span></a>
                <a href="" target="_blank"><span>Home & Garden</span></a>
                <a href="" target="_blank"><span>Music</span></a>
                <a href="" target="_blank"><span>Visual Arts</span></a>
            </div>
            <div className="footer-information-bar">
                <div className="language-selector">
                    <p>English</p>
                </div>
                <div className="copyright-text">
                    <p>© 2021 Instagram from Facebook</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
