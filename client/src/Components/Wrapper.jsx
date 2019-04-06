import React from "react";

function Wrapper(props) {
    return (
        <div className="container">
            <div className="center-align border" id="info">
                <h3>(React) Google Books Search</h3>
                <h5>Search for and Save Books of Interest</h5>
            </div>
            {props.children}
        </div>
    );
}

export default Wrapper;