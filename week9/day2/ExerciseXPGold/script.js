"use strict";

// Exercise 1 : Star Wars API

const urls = [
  "https://www.swapi.tech/api/people/1",
  "https://www.swapi.tech/api/people/2",
  "https://www.swapi.tech/api/people/3",
  "https://www.swapi.tech/api/people/4",
];
const requests = urls.map((url) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = (e) => res(xhr);
    xhr.onerror = (e) => rej(err);
    xhr.send();
  });
});
Promise.all(requests)
  .then((res) => {
    res.forEach((item) => {
      console.log(JSON.parse(item.response));
    });
  })
  .catch((err) => console.error(`There was an error! (${err.message})`));
