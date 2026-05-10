const { validationResult } = require("express-validator");
const Task = require("../models/Task");
const Project = require("../models/Project");

const createTask = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const { title, description, project, assignedTo, priority, dueDate, status } = req.body;

    const projectExists = await Project.findById(project);
    if (!projectExists)
      return res.status(404).json({ message: "Project not found" });

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo: assignedTo || null,
      priority: priority || "medium",
      status: status || "todo",
      dueDate: dueDate || null,
      createdBy: req.user._id,
    });

    const populatedTask = await Task.findById(task._id)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    res.status(201).json(populatedTask);
  } catch (error) {
    next(error);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const { projectId, status, priority } = req.query;
    const query = {};

    if (projectId) query.project = projectId;
    if (status) query.status = status;
    if (priority) query.priority = priority;

    if (req.user.role === "member") {
      query.$or = [
        { assignedTo: req.user._id },
        { createdBy: req.user._id },
      ];
    }

    const tasks = await Task.find(query)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    const isAssigned = task.assignedTo?._id.toString() === req.user._id.toString();
    const isCreator = task.createdBy._id.toString() === req.user._id.toString();

    if (req.user.role !== "admin" && !isAssigned && !isCreator)
      return res.status(403).json({ message: "Access denied" });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const task = await Task.findById(req.params.id);
    if (!task)
      return res.status(404).json({ message: "Task not found" });

    const { title, description, assignedTo, priority, dueDate, status } = req.body;

    if (title) task.title = title;
    if (description !== undefined) task.description = description;
    if (assignedTo !== undefined) task.assignedTo = assignedTo || null;
    if (priority) task.priority = priority;
    if (dueDate !== undefined) task.dueDate = dueDate || null;
    if (status) task.status = status;

    await task.save();

    const updatedTask = await Task.findById(task._id)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const updateTaskStatus = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const task = await Task.findById(req.params.id);
    if (!task)
      return res.status(404).json({ message: "Task not found" });

    const isAssigned = task.assignedTo?.toString() === req.user._id.toString();
    if (req.user.role !== "admin" && !isAssigned)
      return res.status(403).json({ message: "You can only update your assigned tasks" });

    task.status = req.body.status;
    await task.save();

    const updatedTask = await Task.findById(task._id)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task)
      return res.status(404).json({ message: "Task not found" });

    await task.deleteOne();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getMyTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user._id })
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getOverdueTasks = async (req, res, next) => {
  try {
    const query = {
      dueDate: { $lt: new Date() },
      status: { $ne: "done" },
    };

    if (req.user.role === "member") {
      query.assignedTo = req.user._id;
    }

    const tasks = await Task.find(query)
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email")
      .sort({ dueDate: 1 });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  updateTaskStatus,
  deleteTask,
  getMyTasks,
  getOverdueTasks,
};
