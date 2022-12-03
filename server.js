require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/name", (req, res) => {
  if (req.body.name) {
    return res.json({ name: req.body.name });
  } else {
    res.status(400).json({ error: "No Name Provide" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`App Run ${process.env.PORT}`);
});
