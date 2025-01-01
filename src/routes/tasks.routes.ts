import { Router } from "express";
import { getTasks , getTaskByID, createTask, updateTask, deleteTask } from "../controllers";
import { isAdmin, verifyToken } from "../middleware";

export const taskRoutes = Router();

taskRoutes.get("/", getTasks);

taskRoutes.get("/:id", getTaskByID);

taskRoutes.post("/",[verifyToken] , createTask);

taskRoutes.put("/:id",[verifyToken] , updateTask);

taskRoutes.delete("/:id",[verifyToken , isAdmin ], deleteTask);


