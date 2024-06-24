document.addEventListener("DOMContentLoaded", () => {
  const books = getBooksFromLocalStorage();
  renderBooks(books);

  const bookSubmitButton = document.getElementById("bookSubmit");
  const isCompleteCheckbox = document.getElementById("inputBookIsComplete");

  document.getElementById("inputBook").addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });

  document.getElementById("searchBook").addEventListener("submit", (event) => {
    event.preventDefault();
    searchBook();
  });

  isCompleteCheckbox.addEventListener("change", () => {
    if (isCompleteCheckbox.checked) {
      bookSubmitButton.textContent = "Masukkan Buku Ke Rak Sudah Dibaca";
    } else {
      bookSubmitButton.textContent = "Masukkan Buku Ke Rak Belum Dibaca";
    }
  });

  if (isCompleteCheckbox.checked) {
    bookSubmitButton.textContent = "Masukkan Buku Ke Rak Sudah Dibaca";
  } else {
    bookSubmitButton.textContent = "Masukkan Buku Ke Rak Belum Dibaca";
  }
});

function addBook() {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;
  const cover = document.getElementById("inputBookCover").files[0];

  const bookId = +new Date();
  const book = {
    id: bookId,
    title,
    author,
    year,
    isComplete,
    cover: cover ? URL.createObjectURL(cover) : null,
  };

  const books = getBooksFromLocalStorage();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks(books);

  document.getElementById("inputBook").reset();
}

function searchBook() {
  const searchTitle = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();
  const books = getBooksFromLocalStorage();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle)
  );
  renderBooks(filteredBooks);
}

function getBooksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

function renderBooks(books) {
  const incompleteBookshelfList = document.getElementById(
    "incompleteBookshelfList"
  );
  const completeBookshelfList = document.getElementById(
    "completeBookshelfList"
  );

  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookshelfList.append(bookElement);
    } else {
      incompleteBookshelfList.append(bookElement);
    }
  });
}

function createBookElement(book) {
  const bookItem = document.createElement("div");
  bookItem.classList.add("book_item");

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Penulis: ${book.author}`;

  const bookYear = document.createElement("p");
  bookYear.textContent = `Tahun: ${book.year}`;

  const bookCover = document.createElement("img");
  bookCover.classList.add("book_cover");
  if (book.cover) {
    bookCover.src = book.cover;
  }

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  const toggleButton = document.createElement("button");
  toggleButton.textContent = book.isComplete
    ? "Belum selesai dibaca"
    : "Selesai dibaca";
  toggleButton.classList.add("green");
  toggleButton.addEventListener("click", () => toggleBookComplete(book.id));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus buku";
  deleteButton.classList.add("red");
  deleteButton.addEventListener("click", () => deleteBook(book.id));

  actionContainer.append(toggleButton, deleteButton);
  bookItem.append(bookTitle, bookAuthor, bookYear, bookCover, actionContainer);

  return bookItem;
}

function toggleBookComplete(bookId) {
  const books = getBooksFromLocalStorage();
  const bookIndex = books.findIndex((book) => book.id === bookId);
  books[bookIndex].isComplete = !books[bookIndex].isComplete;
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks(books);
}

function deleteBook(bookId) {
  const books = getBooksFromLocalStorage();
  const updatedBooks = books.filter((book) => book.id !== bookId);
  localStorage.setItem("books", JSON.stringify(updatedBooks));
  renderBooks(updatedBooks);
}
