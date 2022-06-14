"use strict";
const getJsonData = async () => {
  try {
    const res = await fetch("http://localhost:3000/json");
    const jsonData = await res.json();
    console.log(jsonData);
    const h3 = document.createElement("h3");
    h3.textContent = JSON.stringify(jsonData);
    document.body.insertAdjacentElement("beforeend", h3);
  } catch (e) {
    console.log(e);
  }
};

getJsonData();

document.querySelector(".button").addEventListener("click", function () {
  alert("You clicked me!");
});
