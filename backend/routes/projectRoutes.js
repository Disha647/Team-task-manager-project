const express = require("express");
const { body } = require("express-validator");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addMember,
  removeMember,
} = require("../controllers/projectController");

const router = express.Router();

router.post(
  "/",
  protect,
  adminOnly,
  [body("title").trim().notEmpty().withMessage("Project title is required")],
  createProject
);

router.get("/", protect, getProjects);

router.get("/:id", protect, getProjectById);

router.put(
  "/:id",
  protect,
  adminOnly,
  [
    body("title").optional().trim().notEmpty().withMessage("Title cannot be empty"),
    body("status")
      .optional()
      .isIn(["active", "archived"])
      .withMessage("Status must be active or archived"),
  ],
  updateProject
);

router.delete("/:id", protect, adminOnly, deleteProject);

router.post("/:id/members", protect, adminOnly, addMember);

router.delete("/:id/members/:userId", protect, adminOnly, removeMember);

module.exports = router;
