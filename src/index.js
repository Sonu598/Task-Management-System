const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
