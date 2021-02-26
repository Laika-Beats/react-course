const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo.js");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET ONE
// router.get("/:id");
// CREATE
// DELETE
// UPDATE

module.exports = router;
