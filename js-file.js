const myLibrary = [];

function Book(titel, pages, author, id, read) {
    this.titel = titel;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.readStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(titel, pages, author, id, read) {
    const newBook = new Book(titel, pages, author, id, read);
    myLibrary.push(newBook);
}

function addBooks() {
    const container = document.querySelector('#library');
    container.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-class');
        card.dataset.id = book.id;

        card.innerHTML = "Hello";

        container.appendChild(card);
    });
}

const createBtn = document.querySelector('.create');
createBtn.addEventListener('click', () => {
    addBooks();
})