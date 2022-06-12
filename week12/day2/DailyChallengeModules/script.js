// Part I

const main = require("./main");
const b = 5;
console.log(main.largeNumber + b);

// Part II

const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(
    `<h1>Hi there at the frontend</h1> <p>My Module is ${
      main.largeNumber + b
    }</p>`
  );
  console.log("I am listening..");
});
server.listen(3000);

// Part III

const server2 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>The current date is: ${main.dateAndTime()}</h1>`);
});
server2.listen(8080);
