import { Router } from "express";
import { getTasks, getTaskByID, createTask, updateTasks, deleteTask } from "../controllers/tasks.controller";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTaskByID);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTasks);

router.delete("/tasks/:id", deleteTask);

export default router;