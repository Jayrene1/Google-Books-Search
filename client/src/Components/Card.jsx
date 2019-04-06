import React from "react";

function Card(props) {
    return (
        <div className="row">
            <div className="col s12 border">
                <h5>{props.info || "Blank Card"}</h5>
                {props.children}
            </div>
        </div>
    );
}

export default Card;