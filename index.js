const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello world!" });
});

const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
