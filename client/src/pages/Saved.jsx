import React, { Component } from "react";
import Card from "../Components/Card";
import ListItem from "../Components/ListItem";
import axios from "axios";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios.get("/api/books")
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  }

  deleteBook = book => {
    axios.delete(`/api/books/${book._id}`)
      .then(res => this.setState({books: this.state.books.filter(_book => _book._id !== book._id)}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Card info="Saved Books">
        {this.state.books.length ? (
            this.state.books.map((book, index) => (
                <ListItem book={book} key={index}>
                  <div className="book-buttons">
                    <a type="button" style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer" className="blue btn right" href={book.link}>View</a>
                    <button type="button" className="red btn right" onClick={()=> this.deleteBook(book)}>Delete</button>
                  </div>
                </ListItem>
            ))
        ) : (
            <h5>No Books to Display</h5>
        )}
      </Card>
    );
  }
}

export default Saved;