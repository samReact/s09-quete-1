require("dotenv").config();
const express = require("express");
const path = require("path");

const { Item } = require("./data-layer/models");

const app = express();
const PATH_TO_WEB_APP_BUILD = "web-app/build";
app.use(express.static(path.join(__dirname, PATH_TO_WEB_APP_BUILD)));

app
  .get("/api/items", async (req, res) => {
    res.send({ items: await Item.findAll() });
  })
  .get("*", (req, res) => {
    res.sendFile(path.join(__dirname, PATH_TO_WEB_APP_BUILD, "index.html"));
  });

const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
