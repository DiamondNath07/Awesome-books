import { DateTime } from './modules/luxon.js';
import BookShelf from './modules/booksConstructor.js';
import showBooks from './modules/BookDisplay.js';
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from './modules/LocalStorage.js';

const currentFormTitle = document.querySelector('#title');
const currentFormAuthor = document.querySelector('#author');
const currentFormBookAddButton = document.querySelector('#book-add-button');
const linkAdd = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const books = document.querySelector('.book-shelf');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');
const dateTime = document.querySelector('.date-time');

const awesomeBookShelf = new BookShelf();

currentFormBookAddButton.addEventListener('click', () => {
  const title = currentFormTitle.value;
  const author = currentFormAuthor.value;
  awesomeBookShelf.addBook(title, author);
  saveDataToLocalStorage(awesomeBookShelf.arrBooks);
});

linkList.addEventListener('click', () => {
  books.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
});

linkAdd.addEventListener('click', () => {
  books.classList.add('hide');
  form.classList.remove('hide');
  contact.classList.add('hide');
});

linkContact.addEventListener('click', () => {
  books.classList.add('hide');
  form.classList.add('hide');
  contact.classList.remove('hide');
});

const setTime = () => {
  dateTime.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};
setInterval(setTime, 1000);

window.onload = () => {
  books.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
  awesomeBookShelf.arrBooks = loadDataFromLocalStorage();
  showBooks(awesomeBookShelf);
};

// BooksToDom.domBooksList(book);

// Storage.addBooksToStorage(book);

// Storage.checkEmptyList();

// BooksToDom.clearField();
