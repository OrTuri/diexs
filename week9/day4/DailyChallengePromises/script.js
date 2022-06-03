"use strict";

// 1st Challenge

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

async function promissesHandler(promissesArray) {
  try {
    let arr = new Array();
    for (let promise of promissesArray) {
      arr.push(await promise);
    }
    return arr;
  } catch (err) {
    console.log("There was an error!");
  }
}
promissesHandler([promise1, promise2, promise3]);
Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// 2nd Challenge

const form = document.forms.formSunrise;
const getAPIResponse = (latitude, longitude) => {
  return fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}
  `).then((res) => res.json());
};
const showInDom = (title, value) => {
  const container = document.createElement("div");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  h4.textContent = title;
  h4.classList.add("text-center");
  p.textContent = value;
  p.classList.add("text-center");
  container.append(h4, p);
  document.body.insertAdjacentElement("beforeend", container);
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const dataObject = new Object();
  for (let [key, value] of formData) {
    dataObject[key] = value;
  }
  const promiseCity1 = getAPIResponse(
    dataObject.firstCityLatitude,
    dataObject.firstCityLongitude
  );
  const promiseCity2 = getAPIResponse(
    dataObject.secondCityLatitude,
    dataObject.secondCityLongitude
  );
  Promise.all([promiseCity1, promiseCity2]).then((res) => {
    res.forEach((city, i) => {
      console.log(city);
      showInDom(`City ${i + 1}`, city.results.sunrise);
    });
  });
});
