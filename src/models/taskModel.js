const pool = require("../config/db");

const getTasks = async () => {
  const result = await pool.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return result.rows;
};

const createTask = async (task) => {
  const { title, description, status } = task;
  const result = await pool.query(
    "INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *",
    [title, description, status || "pending"]
  );
  return result.rows[0];
};

const updateTask = async (id, task) => {
  const { title, description, status } = task;
  const result = await pool.query(
    `UPDATE tasks 
         SET title = $1, description = $2, status = $3, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $4 RETURNING *`,
    [title, description, status, id]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
