import React, { Fragment } from "react";

function ListItem(props) {
    return (
        <Fragment>
        <div className="book">
            <h5>{props.book.title}</h5>
            <h6>Written by {props.book.authors}</h6>
            <div className="flex">
                <img className="responsive-img margin" src={props.book.image} alt="Book Cover"/>
                <p className="margin">{`${props.book.description}...`}</p>
            </div>
            {props.children}
        </div>
        <div className="divider"></div>
        </Fragment>
    );    
}

export default ListItem;