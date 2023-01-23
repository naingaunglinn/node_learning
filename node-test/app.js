const express = require("express");
const logger = require("morgan");
const app = express();
const port = 3000;

const wiki = require("./wiki");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/wiki", wiki);
app.use(logger("dev"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
