// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Prevents CORS error on front-end when connecting to API
app.use(cors());

// Connect to mongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("🌐🌐🌐 Connected to Database."));

// Allows server to accept JSON
app.use(express.json());

// Routes
const todoRoutes = require("./routes/todos.js");
app.use("/todos", todoRoutes);

// Connect to localhost
app.listen(process.env.PORT, () =>
  console.log(
    "🌎🌎🌎 Server Started. Listening on http://localhost:" + process.env.PORT
  )
);
