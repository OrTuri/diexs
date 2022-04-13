"use strict";

function createRow() {
  return document.createElement("tr");
}
function createTd() {
  return document.createElement("td");
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createCalendar(year, month) {
  button.remove();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date1 = new Date(year, month - 1);
  let date2 = new Date(year, month);
  let textNode;
  let h1 = document.createElement("h1");
  textNode = createTextNode(date1);
  h1.append(textNode);
  document.body.append(h1);
  h1.style.textAlign = "center";
  const daysInMonth = (date2 - date1) / (1000 * 60 * 60 * 24);
  const monthDayBegin = date1.getDay();
  const table = document.createElement("table");
  document.body.append(table);
  document.createElement("thead");
  const thead = document.createElement("thead");
  table.append(thead);
  let row = createRow();
  thead.append(row);
  let td = createTd();

  days.forEach((item) => {
    td = createTd();
    row.append(td);
    let strong = document.createElement("strong");
    td.append(strong);
    textNode = createTextNode(item);
    strong.append(textNode);
    td.style.border = "1px solid #000";
    td.style.width = "100px";
    td.style.textAlign = "center";
  });
  table.style.margin = "auto";
  let tbody = document.createElement("tbody");
  table.append(tbody);
  let date = 1;
  for (let i = 0; i < 5; i++) {
    row = createRow();
    tbody.append(row);
    for (let j = 0; j < 7; j++) {
      td = createTd();
      row.append(td);
      td.style.border = "1px solid #000";
      td.style.textAlign = "center";
      td.style.height = "20px";
      if (j < monthDayBegin && i === 0) {
        textNode = createTextNode(".");
        td.append(textNode);
      } else if (date <= daysInMonth) {
        textNode = createTextNode(date);
        td.append(textNode);
        date++;
      }
    }
  }
}

function error() {
  alert("Error! You entered invalid data! Please try again!");
  input();
}

function input() {
  const year = Number(prompt("Please enter a valid year"));
  const month = Number(prompt("Please enter a valid month"));
  if (isNaN(year) || !(String(year).length === 4)) {
    error();
    return;
  }
  if (isNaN(month) || !(String(month).length < 3 && String(month).length > 0)) {
    error();
    return;
  }
  createCalendar(year, month);
}

let button = document.createElement("button");
document.body.append(button);
let textNode = createTextNode("Click here to get a calender");
button.append(textNode);
button.style.margin = "auto";
button.style.display = "block";
button.style.border = "1px solid #333";
button.style.padding = "20px 40px";
button.style.borderRadius = "20px";
button.setAttribute("onclick", "input()");
button.style.cursor = "pointer";
button.style.backgroundColor = "red";
button.addEventListener("mouseover", (e) => {
  button.style.backgroundColor = "#fff";
});
button.addEventListener("mouseout", (e) => {
  button.style.backgroundColor = "red";
});
