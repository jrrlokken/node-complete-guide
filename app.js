const express = require("express");
const http = require("http");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.status(200).send({ message: "success" });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server listening on 3000....");
});
