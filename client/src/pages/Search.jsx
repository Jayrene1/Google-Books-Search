import React, { Component, Fragment } from "react";
import Card from "../Components/Card.jsx";
import ListItem from "../Components/ListItem.jsx";
import API from "../utils/API";

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
          //console.log(this.state.search);
          API.search(this.state.search)
            .then(res => {
                console.log(res);
                const data = res.data.items;
                let bookArray = [];
                for (var i = 0; i < data.length; i++) {
                    let bookObject = {
                        title: data[i].volumeInfo.title,
                        authors: data[i].volumeInfo.authors,
                        description: data[i].volumeInfo.description,
                        image: data[i].volumeInfo.imageLinks.thumbnail,
                        link: data[i].volumeInfo.infoLink
                    };
                    bookArray.push(bookObject);
                }
                console.log(bookArray);
                this.setState({
                    books: bookArray
                })
            })
            .catch(err => console.log(err));
      }
  };
  
  saveBook = book => {
      console.log(`Saving Book ${book}`); // Save to mongo!!!!!!!!!!!!!!!!!
  }

  render() {
    return (
        <Fragment>
            <Card info="Book Search">
                <form>
                    <div className="input-field col s12">
                        <input placeholder="Book Title" name="search" type="text" className="validate" value={this.state.search} onChange={this.handleChange} />
                        <button type="button" className="waves-effect waves-light btn right" disabled={!this.state.search} onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
            </Card>

            <Card info="Results">
                {this.state.books.length ? (
                    this.state.books.map((book, index) => (
                        <ListItem book={book} key={index}>
                            <a type="button" className="blue btn right" href={book.link}>View</a>
                            <button type="button" className="green btn right" onClick={()=> this.saveBook(book)}>Save</button>
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