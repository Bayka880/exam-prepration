const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const ATLAS_MONGO_CONNECTION = process.env.ATLAS_MONGO_CONNECTION;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
mongoose.connect(ATLAS_MONGO_CONNECTION).then(() => {
  console.log("connected to the mongoDb");
  app.listen(PORT, () => {
    console.log("Express listen=" + PORT);
  });
});
