// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to mongoDB
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("🌐🌐🌐 Connected to Database."));

// Allows server to accept JSON
app.use(express.json());

// Connect to localhost
app.listen(prcoess.env.PORT, () =>
  console.log("🌎🌎🌎 Server Started. Listening on http://localhost:3000/")
);
