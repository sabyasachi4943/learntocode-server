const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const content = require("./data/content.json");

app.get("/", (req, res) => {
  res.send("course api Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category-details/:term", (req, res) => {
  const term = req.params.term;
  const result = categories.filter((n) => n.name === term);
  res.send(result);
});

app.get("/topics", (req, res) => {
  res.send(categories);
})

app.get("/topics/:id", (req, res) => {
  const id = req.params.id;
  const selectedContent = content.filter((n) => n.category_id === id);
  res.send(selectedContent);
});

app.get("/allcontents", (req, res) => {
  res.send(content);
});

app.listen(port, () => {
  console.log("course api running on port", port);
});
