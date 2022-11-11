class BookShelf {
  constructor() {
    this.arrBooks = [];
  }

  addBook(newTitle, newAuthor) {
    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
    };

    this.arrBooks.push(newBook);
  }

  removeBook(id) {
    this.arrBooks = this.arrBooks.filter((book) => book.id !== id);
  }
}

export default BookShelf;
