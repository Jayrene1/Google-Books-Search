import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavTabs extends Component {

    render() {
        return (
        <React.Fragment>
            <header>
                <nav>
                    <div className="nav-wrapper grey lighten-2">
                    <a href="/" className="brand-logo center blue-text">
                        Google Books
                    </a>
                    <ul className="left">
                        <li><Link to="/search"><i className="material-icons blue-text">search</i></Link></li>
                        <li><Link to="/saved"><i className="material-icons blue-text">bookmark_border</i></Link></li>
                    </ul>
                    </div>
                </nav>
            </header>
        </React.Fragment>
        );
        }
}

export default NavTabs;
