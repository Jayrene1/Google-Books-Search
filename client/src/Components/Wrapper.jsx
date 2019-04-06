import React from "react";

function Wrapper(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card" id="info">
                        <div className="card-content">
                            <div className="center-align">
                                <h3 className="white-text"><span className="blue-text">(React)</span> Google Books Search</h3>
                                <h5 className="grey-text text-lighten-1">Search for and Save Books of Interest</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default Wrapper;