import React, { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            <div className="divider"></div>
            <footer className="page-footer grey lighten-2">
            <div className="footer-copyright">
                <div className="container">
                © Joshua Arcega, 2019
                <a className="blue-text right" href="https://github.com/Jayrene1/Google-Books-Search">
                    Github
                </a>
                </div>
            </div>
            </footer>
        </Fragment>
    );
}

export default Footer;