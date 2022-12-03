require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/name", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("App Run");
});
