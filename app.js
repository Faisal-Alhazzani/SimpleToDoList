const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const app = express();
let tasks = ["Buy Food", "Eat Food"];
let works = ["Create Proposal", "Call manager"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// sending home page
app.get("/", function (req, res) {
  res.render("list", {
    listTitle: date.getDate(),
    newItem: tasks,
    path: "home",
  });
});

app.post("/", function (req, res) {
  if (req.body.list === "work") {
    works.push(req.body.item);
    res.redirect("/work");
  }
  console.log(req.body);
  tasks.push(req.body.item);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work To Do List",
    newItem: works,
    path: "work",
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});
// Running server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
