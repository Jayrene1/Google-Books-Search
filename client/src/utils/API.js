import axios from "axios";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  // Gets all books
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=15&orderBy=relevance&key=${API_KEY}`)
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
