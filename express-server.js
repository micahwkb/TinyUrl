"use strict";

const express = require("express");

const bodyParser = require("body-parser");
app.user(bodyParser.urlencoded({extended: true}));

const app = express();
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;


const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
  };

app.get("/", (req, res) => {
  res.end("Hello!");
});
app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});
app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});
app.get("/urls/:id", (req, res) => {
  let templateVars = { shortURL: req.params.id };
});
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.post("/urls", (req, res) => {
  console.log(req.body); // log POST parameters for debugging
  res.send("OK"); // (to be changed later)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

