"use strict";

// Exercise 1: Conversion

const fetchApi = async () => {
  const response = await fetch("https://www.swapi.tech/api/starships/9/");
  const data = await response.json();
  console.log(data);
};
fetchApi();

// Exercise 2: Analyze

// The output will be:
// "calling"
// "resolved"
