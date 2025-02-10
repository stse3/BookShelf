const myLibrary = [];
const bookshelf = document.querySelector(".book-container");

function Book(title, author,pages, isRead){
    this.title = title; //title
    this.author = author; //author 
    this.pages = pages;
    this. isRead = isRead;
    this.index = myLibrary.length;

}

function addBookToLibrary(title,author,pages,isRead){
    //stores the Book object in the array myLibrary
    const book = new Book (title,author,pages,isRead);
    myLibrary.push(book);
    const bookCard = createBookCard(book);
    bookshelf.appendChild(bookCard);

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
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const button_container = document.createElement("div");
    button_container.classList.add("button-container");
    
    const isRead = document.createElement("button")
    isRead.classList.add("read");
    if (book.isRead){
        isRead.textContent = "READ";
        isRead.style.background = 'rgb(87, 179, 233)';
    }else{
        isRead.textContent ="UNREAD";
        isRead.style.background = 'rgb(228, 101, 92)';
    }
    const removeCardBtn = document.createElement("button");
    removeCardBtn.classList.add("remove");
    removeCardBtn.value=book.index;
    removeCardBtn.textContent='X'; 
    
    isRead.addEventListener("click", () => {
        book.isRead = !book.isRead; // Toggle the boolean value
        if (book.isRead){
            isRead.textContent = "READ";
            isRead.style.background = 'rgb(87, 179, 233)';
        }else{
            isRead.textContent ="UNREAD";
            isRead.style.background = 'rgb(228, 101, 92)';
        }

    });

    button_container.append(isRead);
    card.append(button_container);
    return card;//return the bookcard
}

const createBookButton  = document.querySelector(".add-book");
const createBookDialog = document.getElementById("create-book");
const bookForm = document.getElementById("book-form");
function createBook(){
    createBookDialog.showModal();

}
createBookButton.addEventListener("click", createBook);

const cancelBttn = document.querySelector(".exit");
cancelBttn.addEventListener("click", (event)=>{
    event.preventDefault();
    createBookDialog.close()
});

const bottomCancelButton = document.querySelector(".cancel");
bottomCancelButton.addEventListener("click", (event)=>{
    event.preventDefault();
    createBookDialog.close()
});


//save and submit button
const saveButton = document.querySelector(".save");
saveButton.addEventListener("click", (event)=>{
    event.preventDefault();//prevent form submitting

    //get user input
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("page").value.trim();
    const isRead = document.getElementById("isRead").checked; //boolean for checked

    if (title && author && pages){
        addBookToLibrary(title,author,pages,isRead);
        bookForm.reset(); 
        createBookDialog.close(); //close the form    
        
    }else{
        alert("Please fill out all fields.");
    }
});
addBookToLibrary( "The Chamber of Secrets", "JK. Rownling", "1676",true);
addBookToLibrary( "To Kill a Mockingbird", "Harper Lee", "3000",false);
addBookToLibrary( "Pride and Prejudice", "Jane Austen", "3000",false);
addBookToLibrary( "Vibration Site", "GeoSonic Sensor", "3000",true);
