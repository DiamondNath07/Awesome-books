import { saveDataToLocalStorage } from './LocalStorage.js';

export default function showBooks(books) {
  const addElement = (elementType, parent, className) => {
    const element = document.createElement(elementType);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
  }

  const bookList = document.querySelector('.book-list');
  books.arrBooks.forEach((book) => {
    const bookItem = addElement('div', bookList, 'book-item');
    const bookTitle = addElement('div', bookItem, 'book-title');
    bookTitle.innerHTML = `" ${book.title} "  +  by ${book.author}`;

    const bookRemoveButton = addElement(
      'button',
      bookItem,
      'book-remove-button',
    );
    bookRemoveButton.innerHTML = 'Remove';

    bookRemoveButton.addEventListener('click', () => {
      books.removeBook(book.id);
      saveDataToLocalStorage(books.arrBooks);
      window.location.reload();
    });
  });
}
