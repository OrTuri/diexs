"use strict";

// Exercise 1: Analyze #2

// The output will be:
// "==SEQUENTIAL START=="
// "starting slow promise"
// "slow promise is done"
// "slow"
// "starting fast promise"
// "fast promise is done"
// "fast"

// Exercise 2: Analyze #3

//  The output will be:
// "==CONCURRENT START with await=="
// "starting slow promise"
// "starting fast promise"
// "slow promise is done"
// "slow"
// "fast promise is done"
// "fast"

// Exercise 3 : Modify Fetch With Async/Await

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   let datas = [];
//   for (let url of urls) {
//     const response = await fetch(url);
//     const data = await response.json();
//     datas.push(data);
//   }
//   const [users, posts, albums] = datas;
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };

// getData();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => {
      return (async () => {
        const response = await fetch(url);
        return await response.json();
      })();
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};
getData();
