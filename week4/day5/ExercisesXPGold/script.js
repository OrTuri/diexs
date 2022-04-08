"use strict";
const div = document.createElement("div");
div.classList.add("listBooks");
document.body.append(div);
const allBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://www.penguin.co.uk/content/dam/prh/books/108/1088132/9780434020485.jpg",
    alreadyRead: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781949846386/the-great-gatsby-large-print-9781949846386_hr.jpg",
    alreadyRead: false,
  },
];
let table = document.createElement("table");
div.appendChild(table);
let tableHead = document.createElement("thead");
table.append(tableHead);
let tbody = document.createElement("tbody");
table.append(tbody);
let tr = document.createElement("tr");
allBooks.forEach((item) => {
  let th = document.createElement("th");
  tableHead.append(tr);
  tr.append(th);

  th.textContent = item.title;
  th.style.border = "1px solid #000";
  if (item.alreadyRead) {
    th.style.backgroundColor = "red";
    th.style.color = "#fff";
  }
});
tr = document.createElement("tr");
tbody.append(tr);
allBooks.forEach((item) => {
  let td = document.createElement("td");
  tr.append(td);
  td.textContent = `Author: ${item.author}`;
  td.style.border = "1px solid #000";
});
tr = document.createElement("tr");
tbody.append(tr);
allBooks.forEach((item) => {
  let td = document.createElement("td");
  tr.append(td);
  let img = document.createElement("img");
  img.src = item.image;
  td.append(img);
  img.style.width = "100px";
  td.style.border = "1px solid #000";
});
table.style.textAlign = "center";
document.querySelector(".listBooks").style.width = "fit-content";
document.querySelector(".listBooks").style.margin = "auto";
document.querySelector(".listBooks").style.marginTop = "40px";
table.style.border = "1px solid #000";
