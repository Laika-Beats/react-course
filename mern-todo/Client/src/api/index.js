import axios from "axios";

const API = axios.create({baseURL = "http://localhost:4000/"})

export const getTodos = () => API.get("/todos")
export const createTodo = (newTodo) => API.post("/todos", newTodo)
export const deleteTodo = (id) => API.delete(`/todos/${id}`)
export const updateTodo = (id, updatedTodo) => API.patch(`/todos/${id}`, updatedTodo)
