"use strict";
const form = document.forms.searchForm;
const searchInput = form.searchInput;
const searchBtn = form.searchBtn;
const cardsContainer = document.querySelector(".cards-container");
const errorModal = new bootstrap.Modal(document.getElementById("myModal"));
const tempUnitLabel = document.querySelector(".form-check-label");
const tempUnitCheckbox = document.querySelector(".form-check-input");
const weatherCards = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];
class WeatherCard {
  constructor(city, temp, country, weatherDescription, imgSrc, fromSearch) {
    this.city = city;
    this.country = country;
    this.temp = temp.toFixed(1);
    this.weatherDescription = weatherDescription;
    this.imgSrc = imgSrc;
    this.createWeatherCard();
    this.removeBtn.addEventListener("click", this.removeCard.bind(this));
    if (!tempUnitCheckbox.checked) {
      this.displayTempInFahrenheit(true);
    }
    weatherCards.push(this);
    // pushDataToLocalStorage(weatherCards);
    // this.arrPosition = weatherCards.length - 1;
  }
  createWeatherCard() {
    const mainCardDiv = document.createElement("div");
    const imgIcon = document.createElement("img");
    const cardBodyDiv = document.createElement("div");
    const degreesH5 = document.createElement("h5");
    const cityTitleH5 = document.createElement("h5");
    const degreesSpan = document.createElement("span");
    const cityTitleSpan = document.createElement("span");
    const weatherDescriptionP = document.createElement("p");
    const linkBtn = document.createElement("a");
    const exitIcon = document.createElement("i");
    const degreesTextNode = this.temp;
    const cityTextNode = this.city;
    mainCardDiv.append(exitIcon);
    mainCardDiv.append(imgIcon);
    mainCardDiv.append(cardBodyDiv);
    cardBodyDiv.append(degreesH5);
    cardBodyDiv.append(cityTitleH5);
    cardBodyDiv.append(weatherDescriptionP);
    cardBodyDiv.append(linkBtn);
    mainCardDiv.className = "card shadow text-center";
    exitIcon.className =
      "fa-solid fa-xmark fs-3 ms-auto me-3 mt-2 text-secondary exit-icon";
    imgIcon.className = "card-img-top weather-icon d-block m-auto";
    imgIcon.src = this.imgSrc;
    imgIcon.alt = "weather icon";
    degreesH5.append(degreesTextNode);
    degreesH5.append(degreesSpan);
    cityTitleH5.append(cityTextNode);
    cityTitleH5.append(cityTitleSpan);
    degreesSpan.innerHTML = "&#8451;";
    cityTitleSpan.textContent = this.country;
    cityTitleSpan.className = "fs-3 higher d-inline-block";
    cardBodyDiv.className = "card-body";
    degreesH5.className = "card-title fs-1";
    degreesSpan.className = "fs-4 higher d-inline-block ms-1";
    cityTitleH5.className = "card-title fs-5";
    cityTitleSpan.className =
      "badge bg-success higher fs-7 rounded-circle ms-1";
    weatherDescriptionP.className = "lead";
    weatherDescriptionP.textContent = this.weatherDescription;
    linkBtn.className = "btn btn-success d-block";
    linkBtn.textContent = "More info";
    mainCardDiv.style.transform = "translateY(-100vh)";
    mainCardDiv.style.transition = "all 0.5s";
    cardsContainer.insertAdjacentElement("afterbegin", mainCardDiv);
    setTimeout(() => {
      mainCardDiv.style.transform = "translateY(0)";
    }, 0);
    this.removeBtn = exitIcon;
    this.card = mainCardDiv;
    this.tempHolder = degreesH5;
  }
  removeCard() {
    this.card.style.transform = "translateY(-100vh)";
    setTimeout(() => {
      this.card.remove();
    }, 500);
    // weatherCards.splice(this.arrPosition, 1);
    // pushDataToLocalStorage(weatherCards);
  }
  displayTempInFahrenheit(bool) {
    if (bool) {
      const fahrenheit = ((this.temp * 9) / 5 + 32).toFixed(1);
      const htmlFahrenheit = `<h5 class="card-title fs-1 temp-holder">${fahrenheit}<span class="fs-4 higher d-inline-block ms-1">&#8457;</span></h5>`;
      this.tempHolder.innerHTML = htmlFahrenheit;
    } else {
      const htmlCelcius = `<h5 class="card-title fs-1 temp-holder">${this.temp}<span class="fs-4 higher d-inline-block ms-1">&#8451;</span></h5>`;
      this.tempHolder.innerHTML = htmlCelcius;
    }
  }
}
function pushDataToLocalStorage(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&units=metric`
    );
    const data = await response.json();
    const dataCity = data.name;
    const temp = data.main.temp;
    const country = data.sys.country;
    const weatherDescription = data.weather[0].description;
    const iconId = data.weather[0].icon;
    const imgSrc = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    new WeatherCard(dataCity, temp, country, weatherDescription, imgSrc);
  } catch (err) {
    console.log(err);
    errorModal.show();
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeatherData(searchInput.value, true);
  searchInput.value = "";
});
// if (weatherCards.length > 0) {
//   weatherCards.forEach((card) => card.createWeatherCard());
// }
tempUnitCheckbox.addEventListener("input", function (e) {
  if (tempUnitCheckbox.checked) {
    tempUnitLabel.textContent = "Celcius";
    weatherCards.forEach((card) => card.displayTempInFahrenheit(false));
  } else {
    tempUnitLabel.textContent = "Fahrenheit";
    weatherCards.forEach((card) => card.displayTempInFahrenheit(true));
  }
});
