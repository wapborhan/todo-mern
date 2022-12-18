require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import Routes
const authRoute = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded());

app.get("/api", (req, res) => {
  res.send("Running");
});

app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect Database");

    app.listen(process.env.PORT, () => {
      console.log(`App Run ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
