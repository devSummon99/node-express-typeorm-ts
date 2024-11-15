import { Router } from "express";
import { getTasks , getTaskByID, createTask, updateTask, deleteTask } from "../controllers/tasks.controller";

const router = Router();

router.get("/", getTasks );

router.get("/:id", getTaskByID);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;