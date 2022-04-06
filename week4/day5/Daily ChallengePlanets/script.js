"use strict";
const planets = [
  { planet: "Mercury", moons: 3 },
  { planet: "Venus", moons: 6 },
  { planet: "Earth", moons: 7 },
  { planet: "Mars", moons: 3 },
  { planet: "Jupiter", moons: 5 },
  { planet: "Saturn", moons: 9 },
  { planet: "Uranus", moons: 2 },
];
planets.forEach((item) => {
  let div = document.createElement("div");
  div.classList.add("planet", item.planet);
  div.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".listPlanets").append(div);
  for (let i = 0; i < item.moons; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    div.append(moonDiv);
    moonDiv.style.left = `${i * 10}%`;
  }
});
document.querySelector(".listPlanets").style.display = "flex";
document.querySelector(".listPlanets").style.gap = "30px";
document.querySelector(".listPlanets").style.justifyContent = "center";
document.querySelector(".listPlanets").style.marginTop = "50px";
