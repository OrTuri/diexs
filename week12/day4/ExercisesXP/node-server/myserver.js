// Exercise 1 : HTTP

const http = require("http");
const server = http.createServer((req, res) => {
  const html = `
    <h1>Welcome!</h1>
    <h2>This is a test</h2>
    <button>Please click here!</button>
    `;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});
server.listen(3000);
