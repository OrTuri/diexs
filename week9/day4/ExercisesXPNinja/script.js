"use strict";

// Exercise 1: Async Await & Try/Catch

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return (async () => {
          const response = await fetch(url);
          if (response.status !== 200) {
            throw new Error("Oooooooops!");
          }
          return await response.json();
        })();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.error(`There was an error! ${err}`);
  }
};
getData();

// Exercise 2 : Analyze #4

// The output will be:
// "==CONCURRENT START with Promise.all=="
// "starting slow promise"
// "starting fast promise"
// "fast promise is done"
// "slow promise is done"
// "slow"
// "fast"

// Exercise 3 : Analyze #5

// The output will be:
// "==PARALLEL with await Promise.all=="
// "starting slow promise"
// "starting fast promise"
// "fast promise is done"
// "fast"
// "slow promise is done"
// "slow"

// Exercise 4 : Analyze #6

// The output will be:
// "==PARALLEL with Promise.then=="
// "starting slow promise"
// "starting fast promise"
// "fast promise is done"
// "fast"
// "slow promise is done"
// "slow"
