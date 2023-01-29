import { DateTime } from './luxon.js';

class Library {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const date = document.getElementById('date');
const setTimeDate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  date.innerHTML = now;
};
window.setInterval(setTimeDate, 1000);

export default Library;