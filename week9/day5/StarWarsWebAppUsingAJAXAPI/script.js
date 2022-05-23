"use strict";
const spinner = document.querySelector(".fa-spin");
const descriptionContainer = document.querySelector(".description");
const btn = document.querySelector(".btn-submit");
const showSpinner = () => {
  spinner.classList.remove("d-none");
};
const hideSpinner = () => {
  spinner.classList.add("d-none");
};
const randomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0);
};
const getHomeWorldName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result.properties.name;
};
const displayErrorInDom = (errorMsg) => {
  descriptionContainer.innerHTML = "";
  hideSpinner();
  const h3 = document.createElement("h3");
  h3.textContent = errorMsg;
  h3.className = "text-white";
  descriptionContainer.append(h3);
};
const getDataFromApi = async () => {
  try {
    showSpinner();
    const response = await fetch(
      `https://www.swapi.tech/api/people/${randomNumber(1, 83)}`
    );
    const data = await response.json();
    const {
      name,
      gender,
      birth_year: birthYear,
      homeworld: homeworldURL,
      height,
    } = data.result.properties;
    const homeworld = await getHomeWorldName(homeworldURL);
    hideSpinner();
    return { name, gender, birthYear, homeworld, height };
  } catch (err) {
    displayErrorInDom(`There was an error! Please try again later...`);
    console.error(`There was an error! ${err}`);
    throw new Error(`There was an error! ${err}`);
  }
};
const showInDom = (descriptoionObj) => {
  descriptionContainer.innerHTML = "";
  const nameH4 = document.createElement("h4");
  nameH4.className = "mt-3 fw-bold display-6";
  const heightP = document.createElement("p");
  const genderP = document.createElement("p");
  const birthP = document.createElement("p");
  const homeP = document.createElement("p");
  heightP.className = "lead mt-3";
  genderP.className = "lead";
  birthP.className = "lead";
  homeP.className = "lead";
  nameH4.textContent = `${descriptoionObj.name}`;
  heightP.textContent = `Height: ${descriptoionObj.height}`;
  genderP.textContent = `Gender: ${descriptoionObj.gender}`;
  birthP.textContent = `Birth Year: ${descriptoionObj.birthYear}`;
  homeP.textContent = `Home World: ${descriptoionObj.homeworld}`;
  descriptionContainer.append(nameH4, heightP, genderP, birthP, homeP);
};
btn.addEventListener("click", async function (e) {
  descriptionContainer.innerHTML = "";
  const descriptoionObj = await getDataFromApi();
  showInDom(descriptoionObj);
});
