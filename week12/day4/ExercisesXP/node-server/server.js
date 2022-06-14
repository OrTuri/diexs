// Exercise 2 : HTTP & JSON

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      firstname: "John",
      lastname: "Doe",
    })
  );
});
server.listen(8080);
