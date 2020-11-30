const http = require('http');

http.createServer((req, res) =>  {
  console.log("req recieved");
  res.end("omg hi", "utf-8")
}).listen(8000);

console.log("Server Started");