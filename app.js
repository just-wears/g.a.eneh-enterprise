

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const date = require(__dirname + "/date.js");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// main()
// .catch(function (err) {
//   console.log(err);
// });

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/enehDB");
// }
// const day = date.getDate();

// const itemsSchema = {
//   name: String,
// };

// const Item = mongoose.model("Item", itemsSchema);

// const Item1 = new Item({
//   name: "Welcome to your Todolist",
// });
// const Item2 = new Item({
//   name: "Hit the + button to add a new item",
// });
// const Item3 = new Item({
//   name: "<-- Hit this to delete an item",
// });

// const defaultItems = [Item1, Item2, Item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema],
// };

// const List = mongoose.model("List", listSchema);






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











