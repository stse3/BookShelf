const myLibrary = [];
const bookshelf = document.querySelector(".book-container");

function Book(author, title,pages, hasRead){
    this.title = title; //title
    this.author = author; //author 
    this.pages = pages;
    this. read = read;

}

function addBookToLibrary(author,title,pages,isRead){
    //stores the Book object in the array myLibrary
    const book = new Book (author,title,pages,isRead);
    myLibrary.push(book);

}

function createBookCard(book){
    const card= document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent= `${book.title}`;
    card.appendChild(title);

    const author = document.createElement("h2");
    author.classList.add("author");
    author.textContent = `${book.author}`;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = `${book.pages}`;
    card.appendChild(pages);

    const isRead = document.createElement("button")
    isRead.classList.add("read");
    if (isRead){
        isRead.textContent= "Read";//check boolean for read stauts
    }else{
        isRead.textContent ="Unread";
    }
    card.appendChild(isRead);
}