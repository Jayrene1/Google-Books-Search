import React from "react";

function Card(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{props.info || "Blank Card"}</span>
                        <div className="divider"></div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;