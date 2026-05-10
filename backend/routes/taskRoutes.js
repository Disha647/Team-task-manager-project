const express = require("express");
const { body } = require("express-validator");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  updateTaskStatus,
  deleteTask,
  getMyTasks,
  getOverdueTasks,
} = require("../controllers/taskController");

const router = express.Router();

router.post(
  "/",
  protect,
  adminOnly,
  [
    body("title").trim().notEmpty().withMessage("Task title is required"),
    body("project").notEmpty().withMessage("Project is required"),
    body("priority")
      .optional()
      .isIn(["low", "medium", "high"])
      .withMessage("Priority must be low, medium, or high"),
  ],
  createTask
);

router.get("/", protect, getTasks);

router.get("/my-tasks", protect, getMyTasks);

router.get("/overdue", protect, getOverdueTasks);

router.get("/:id", protect, getTaskById);

router.put(
  "/:id",
  protect,
  adminOnly,
  [
    body("title").optional().trim().notEmpty().withMessage("Title cannot be empty"),
    body("priority")
      .optional()
      .isIn(["low", "medium", "high"])
      .withMessage("Priority must be low, medium, or high"),
    body("status")
      .optional()
      .isIn(["todo", "in-progress", "done"])
      .withMessage("Status must be todo, in-progress, or done"),
  ],
  updateTask
);

router.patch(
  "/:id/status",
  protect,
  [
    body("status")
      .isIn(["todo", "in-progress", "done"])
      .withMessage("Status must be todo, in-progress, or done"),
  ],
  updateTaskStatus
);

router.delete("/:id", protect, adminOnly, deleteTask);

module.exports = router;
