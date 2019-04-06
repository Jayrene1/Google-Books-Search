const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: [true, "please specify a title"] },
  authors: { type: [String], required: [true, "please specify author(s)"] },
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
