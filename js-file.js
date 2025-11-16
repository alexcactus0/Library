
const myLibrary = [];

const createBtn = document.querySelector("[data-open-modal]");
const submit = document.querySelector("[data-create-modal]");
const closeBtn = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");


class Book {
    constructor(title, pages, author, read) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    readStatus() {
        this.read = !this.read;
    }
}

function addBookToLibrary() {
    const formTitle = document.getElementById('title').value;
    const formAuthor = document.getElementById('author').value;
    const formPages = document.getElementById('pages').value;
    const read = getSelectedRadio();
    
    if (!formTitle || !formPages || !formAuthor) {
        alert("Please fill up the rest!");
        return;
    }
    
    const newBook = new Book(formTitle, formAuthor, formPages, read);
    myLibrary.push(newBook);
}

function getSelectedRadio() {
    const selected = document.querySelector('input[name="read"]:checked');
    return selected ? selected.value : "Not specified";
    
}

function displayBooks() {
    const container = document.querySelector('#library');
    container.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-class');
        card.dataset.id = book.id;

        card.innerHTML = `
        <div class="book">
            <div class="book_header">
                <h3>Title: ${book.title}</h3>
                <p>by ${book.author}</p>
            </div>
            <div class="book_main">
            <p>${book.pages} pages</p>
            </div>
            <p>status: ${book.read}</p>
        </div>`;

        container.appendChild(card);
    });
}


createBtn.addEventListener('click', () => {
    modal.showModal()
})

submit.addEventListener('click', () => {
    addBookToLibrary()
    displayBooks()
})

closeBtn.addEventListener('click', () => {
    modal.close()
    form.reset()
})

const libraryBtn = document.getElementById('library-btn');
const sidebar = document.getElementById('sidebar');

const body = document.body;
let sidebarOpen = false;

libraryBtn.addEventListener('click', () => {
  sidebarOpen = !sidebarOpen;
  body.style.gridTemplateColumns = sidebarOpen ? '300px 1fr' : '0 1fr';
  sidebar.classList.toggle('show', sidebarOpen);
});