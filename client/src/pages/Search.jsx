import React, { Component, Fragment } from "react";
import Card from "../Components/Card.jsx";
import ListItem from "../Components/ListItem.jsx";
import API from "../utils/API";
import axios from "axios";

class Search extends Component {
  state = {
      search: "",
      books: []
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({search: value});
  };

  handleSubmit = event => {
      event.preventDefault();
      if (this.state.search) {
          API.search(this.state.search)
            .then(res => {
                const data = res.data.items;
                let bookArray = [];
                for (var i = 0; i < data.length; i++) {
                    const info = data[i].volumeInfo;
                    if (info.title && info.authors && info.infoLink) {
                        let shortDescription = "No description available";
                        if (info.description && info.description.length > 512) {
                            shortDescription = (info.description.substring(0, 511));
                        }
                        let bookObject = {
                            title: info.title,
                            authors: info.authors,
                            description: shortDescription,
                            link: info.infoLink
                        };
                        if (info.imageLinks !== undefined) {
                            bookObject.image = info.imageLinks.thumbnail;
                        }
                        bookArray.push(bookObject);
                    }
                }
                this.setState({books: bookArray})
            })
            .catch(err => console.log(err.response));
      }
  };
  
  saveBook = book => {
      axios.post("/api/books", book)
        .then(res => {
            window.M.toast({html: "Book Saved!"});
        })
        .catch(err => console.log(err.response));
  }

  render() {
    return (
        <Fragment>
            <Card info="Book Search">
                <form className="padding margin" onSubmit={e => e.preventDefault()}>
                    <div className="input-field">
                        <label htmlFor="search">Book Title</label>
                        <input name="search" type="text" className="validate" value={this.state.search} onChange={this.handleChange} />
                        <button type="button" className="waves-effect waves-light btn right" disabled={!this.state.search} onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
            </Card>

            <Card info="Results">
                {this.state.books.length ? (
                    this.state.books.map((book, index) => (
                        <ListItem book={book} key={index}>
                            <div className="book-buttons">
                                <a type="button" style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer" className="blue btn right" href={book.link}>View</a>
                                <button type="button" className="green btn right" onClick={()=> this.saveBook(book)}>Save</button>
                            </div>
                        </ListItem>
                    ))
                ) : (
                    <h5>No Books to Display</h5>
                )}
            </Card>
        </Fragment>
    );
  }
}

export default Search;