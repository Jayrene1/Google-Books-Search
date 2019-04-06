import React from "react";

function ListItem(props) {
    return (
        <div className="border book">
            <h5>{props.book.title}</h5>
            <h6>Written by {props.book.authors}</h6>
            <img className="responsive-img" src={props.book.image} alt="Book Cover"/>
            <p>{props.book.description}</p>
            {props.children}
        </div>
    );    
}

export default ListItem;