const express = require("express");
const http = require("http");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In a middleware");
  res.status(200).send({ message: "Add Product" });
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.status(200).send({ message: "success" });
});

app.listen(3000, () => {
  console.log("Server listening on 3000...");
});
