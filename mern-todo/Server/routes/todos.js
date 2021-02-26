const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo.js");

// GET ALL todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE todo
router.get("/:id", getTodo, (req, res) => {
  res.json(res.todo);
});

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

// Middleware
async function getTodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo === null) {
      return res.status(404).json({ message: "Cannot find Todo." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.todo = todo;
  next();
}

module.exports = router;
