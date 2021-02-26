const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Todo = require("../models/todo.js");

// GET ALL Todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE Todo
router.get("/:id", getTodo, (req, res) => {
  res.json(res.todo);
});

// CREATE Todo
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

// DELETE Todo
router.delete("/:id", getTodo, async (req, res) => {
  try {
    await res.todo.remove();
    res.json({ message: "Todo has been deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Todo
router.patch("/:id", getTodo, async (req, res) => {
  if (req.body.message != null) {
    res.todo.message = req.body.message;
  }
  if (req.body.completed != null) {
    res.todo.completed = req.body.completed;
  }
  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
