import { Router } from "express";
import { getTasks , getTaskByID, createTask, updateTask, deleteTask } from "../controllers";

export const taskRoutes = Router();

taskRoutes.get("/", getTasks);

taskRoutes.get("/:id", getTaskByID);

taskRoutes.post("/", createTask);

taskRoutes.put("/:id", updateTask);

taskRoutes.delete("/:id", deleteTask);


