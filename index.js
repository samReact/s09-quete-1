require("dotenv").config();
const express = require("express");

const { Item } = require("./data-layer/models");

const app = express();

app.get("/api/items", async (req, res) => {
  res.send({ items: await Item.findAll() });
});

const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
