import Library from './library.js';

class UiBooks {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }

  addBookToLibrary(title, author, id) {
    const book = new Library(title, author, id);
    this.collection.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  removeBook(id) {
    const result = this.collection.filter((item) => item.id !== id);
    this.collection = result;
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }

  displayBook() {
    const list = document.getElementById('books');
    list.innerHTML = '';
    const ul = document.createElement('ul');
    this.collection.forEach((element) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      li.innerHTML = `${element.title} by ${element.author}`;
      button.innerHTML = 'delete';
      button.addEventListener('click', () => {
        this.removeBook(element.id);
        this.displayBook();
      });
      ul.appendChild(li);
      li.appendChild(button);
    });
    list.appendChild(ul);
  }
}

const bookMaker = new UiBooks();
bookMaker.displayBook();
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookMaker.addBookToLibrary(title, author, Date.now());
  bookMaker.displayBook();
});

// dom manipulation for spa

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'block';
  document.getElementById('form').style.display = 'none';
  document.getElementById('contact-page').style.display = 'none';
});

document.getElementById('add-new').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('form').style.display = 'block';
  document.getElementById('contact-page').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('form').style.display = 'none';
  document.getElementById('contact-page').style.display = 'block';
});

export default UiBooks;
