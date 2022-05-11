"use strict";
class Logic {
  #robots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      image: "https://robohash.org/1?200x200",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      image: "https://robohash.org/2?200x200",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      image: "https://robohash.org/3?200x200",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConer@kory.org",
      image: "https://robohash.org/4?200x200",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      image: "https://robohash.org/5?200x200",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      image: "https://robohash.org/6?200x200",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      image: "https://robohash.org/7?200x200",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdot",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      image: "https://robohash.org/8?200x200",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      image: "https://robohash.org/9?200x200",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      image: "https://robohash.org/10?200x200",
    },
  ];
  #searchInput = document.querySelector(".search-input");
  #searchForm = document.querySelector(".search-form");
  #cardsContainer = document.querySelector(".cards-container");
  constructor() {
    this.#robots.forEach((robot) => this.#createRobotCard(robot));
    this.#filterRobots();
    this.#updateDataList();
  }
  #createRobotCard = (robotObject) => {
    const card = `<div
    id="${robotObject.id}"
    class="card m-auto border-2 border-dark p-1 shadow-lg"
    style="width: 18rem"
  >
    <img src="${robotObject.image}" class="card-img-top rounded-circle shadow-sm" />
    <div class="card-body">
      <h5 class="card-title fw-bold">${robotObject.name}</h5>
      <p class="card-text">${robotObject.email}</p>
    </div>
  </div>`;
    this.#cardsContainer.insertAdjacentHTML("beforeend", card);
  };
  #removeRobotCard(robotObject) {
    const robotCard = document.getElementById(robotObject.id);
    robotCard.classList.add("d-none");
  }
  #filterRobots() {
    const searchForRobot = function (e) {
      e.preventDefault();
      this.#cardsContainer.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("d-none");
      });
      const filteredRobots = this.#robots.filter((robot) => {
        if (
          !robot.name
            .toLowerCase()
            .includes(this.#searchInput.value.toLowerCase())
        )
          return true;
      });
      filteredRobots.forEach((robot) => this.#removeRobotCard(robot));
    };
    this.#searchInput.addEventListener("input", searchForRobot.bind(this));
    this.#searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }
  #updateDataList() {
    const datalist = document.getElementById("robots");
    this.#robots.forEach((robot) => {
      const option = document.createElement("option");
      option.value = robot.name;
      datalist.append(option);
    });
  }
}
const logic = new Logic();
