
const myLibrary = [];

const createBtn = document.querySelector("[data-open-modal]");
const submit = document.querySelector("[data-create-modal]");
const closeBtn = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

function Book(title, pages, author, id, read) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.readStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, pages, author, read) {
    const newBook = new Book(title, pages, author, read);

    const formTitle = document.getElementById('title');
    const formAuthor = document.getElementById('author');
    const formPages = document.getElementById('pages');
    
    if (!formTitle.value || !formPages.value || !formAuthor.value
    ) {
        alert("Please fill up the rest!");
    }
    
    newBook.title = formTitle.value;
    newBook.pages = formPages.value;
    newBook.author = formAuthor.value;
    newBook.read = getSelectedRadio()

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