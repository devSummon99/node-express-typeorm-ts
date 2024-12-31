import { Router } from "express";
import { getUsers, getUserByID, createUser, updateUser, deleteUser } from "../controllers";
import { authMiddleware } from "../middleware";

export const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserByID);

userRoutes.post("/", authMiddleware , createUser);

userRoutes.put("/:id",authMiddleware , updateUser);

userRoutes.delete("/:id", authMiddleware ,deleteUser);

