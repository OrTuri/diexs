"use strict";

const form = document.forms.form;
const robotsArray = [];

class robot {
  constructor(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.createInDom();
    robotsArray.push(this);
  }

  createInDom() {
    const cardsContainer = document.querySelector(".robot-cards-container");
    const html = `<div class="card robot-card p-3" style="width: 18rem">
    <img src="./assets/${this.username}.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.username}</p>
      <a href="#">${this.email}</a>
    </div>
  </div>`;
    const div = document.createElement("div");
    div.insertAdjacentHTML("beforeend", html);
    cardsContainer.append(div);
    this.elem = div;
  }

  deleteFromDom() {
    this.elem.remove();
  }

  hide() {
    this.elem.classList.add("d-none");
  }

  show() {
    this.elem.classList.remove("d-none");
  }
}

const fetchRobots = async () => {
  const res = await fetch("/robots");
  const robots = await res.json();
  robots.forEach((item) => new robot(item.name, item.username, item.email));
};
fetchRobots();

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.searchInput.addEventListener("input", (e) => {
  robotsArray?.forEach((robot) => {
    if (
      robot.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    ) {
      robot.show();
    } else {
      robot.hide();
    }
  });
});
