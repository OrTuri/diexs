"use strict";
// Exercise 1 : Giphy API

async function getGif() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );
    if (response.status !== 200) {
      console.error(
        `There was a problem! The status code is ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data.data);
  } catch (err) {
    console.error(err);
  }
}
// getGif();

// Exercise 2 : Giphy API

async function searchGif(searchWord, numOfGifs, offset) {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${searchWord}&limit=${numOfGifs}&offset=${offset}`
    );
    const data = await response.json();
    console.log(data.data);
  } catch (err) {
    console.error(err);
  }
}
searchGif("sun", 10, 2);
