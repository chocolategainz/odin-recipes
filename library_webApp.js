 
//I need to declare an empty array, so that it can store all my books 

 let myLibrary = []

//object Constructor
function Book(title, author, pages, read) {
  //"this" refers to the object being created
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
//This creates a new object with all our content, and then
//pushes them into our "myLibrary" array
//Always fill out the parameters in a function, or else JavaSCRIPT
// will not recognise your values*
function addBookToLibrary(title,author,pages,read) {
// Our created object called Book has now now been changed to books. 
const book = new Book(title,author,pages,read);
//"books" will take the contents of our object constructor and push it into our empty array
myLibrary.push(book);
};

//My function which will loop through my array and display each book 
//on the page within their own card:

/*
 creating an element and appending (adding) the values
 returned by the constructor to that created element. 
*/

function displayBooksOnPage () {
  const books = document.querySelector(".books");

  myLibrary.forEach(myLibrary => {
  const card = document.createElement("div");  
  //We are adding our new variable (card) to our css element (div)
// and giving our variable a class called ("card"):
card.classList.add("card");
books.appendChild(card);
//Our new child class is added to our parent node (books).
//books is also our constructor which hold the content
//of all of our objects
for (let key in myLibrary) {
    console.log(`${key}: ${myLibrary[key]}`);
    const para = document.createElement("p");
    para.textContent = (`${key}: ${myLibrary[key]}`);
    card.appendChild(para);
  }
})

}


addBookToLibrary("Will","Will Smith & Mark Manson", "398", "read");
addBookToLibrary("Catching Fire","Samantha Collins", "390", "read");
addBookToLibrary("The Charisma Myth","Olivia Fox Cabane", "224", "not read");

console.log(myLibrary);

displayBooksOnPage();










/*




function displayedBooks () {
  myLibrary.forEach(books => {
books.title;
books.author;
books.pages;
books.read;
console.log(books)
  });
}
*/






// 4)Button which will bring up a form and can allow users to input
// a new book. This will be done using Event Listeners.

const btn = document.getElementById("#newBook");
btn.addEventListener("click", () => { 

const form = document.querySelector("form-content");

if (form.style.display === 'none') {
  //  this SHOWS the form
  form.style.display = 'block';
} else {
  // this HIDES the form
  form.style.display = 'none';
}

});



//function Vicious (title, author, pages, read){
 //   this.title = title;
 //   this.author = author;
 //   this.pages = pages;
 //   this.read = read; 

// this.viciousInfo = function () {
//console.log(title);
//console.log(author);
//console.log(pages);
//console.log(read);
 //   }
  //}; 
//Filled in placeholders:       
//const bookOne = new Vicious("Vicious","V. E. Schwab",435,"Not finished yet");
//bookOne.viciousInfo();