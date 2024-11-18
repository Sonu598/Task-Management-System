const express = require("express");
const {
  getAllTasks,
  createNewTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createNewTask);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

module.exports = router;
