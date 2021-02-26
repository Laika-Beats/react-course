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
router.post("/", async (req, res) => {
  const todo = new Todo({
    message: req.body.message,
    completed: req.body.completed,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// DELETE
// UPDATE

module.exports = router;
