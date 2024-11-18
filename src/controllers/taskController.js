const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTask = await createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const updatedTask = await updateTask(req.params.id, req.body);
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const deletedTask = await deleteTask(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

module.exports = { getAllTasks, createNewTask, updateTaskById, deleteTaskById };
