const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/content.json");

app.get("/", (req, res) => {
  res.send("course api Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/topics/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id == id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("course api running on port", port);
});
