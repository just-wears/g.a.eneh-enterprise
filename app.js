const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const date = require(__dirname + "/date.js");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("index");
})

app.get("/products", function(req, res){
  res.render("products");
})


app.get("/services", function(req, res){
  res.render("services");
})


app.get("/about", function(req, res){
  res.render("about");
})







app.listen(3000, function () {
  console.log("Server started on port 3000");
});




