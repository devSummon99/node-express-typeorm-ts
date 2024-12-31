import { Router } from "express";
import { getTasks , getTaskByID, createTask, updateTask, deleteTask } from "../controllers";
import { authMiddleware } from "../middleware";

export const taskRoutes = Router();

taskRoutes.get("/", getTasks);

taskRoutes.get("/:id", getTaskByID);

taskRoutes.post("/",authMiddleware , createTask);

taskRoutes.put("/:id",authMiddleware , updateTask);

taskRoutes.delete("/:id",authMiddleware , deleteTask);


