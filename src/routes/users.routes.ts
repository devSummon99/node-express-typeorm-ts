import { Router } from "express";
import { getUsers, getUserByID, createUser, updateUser, deleteUser } from "../controllers";

export const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserByID);

userRoutes.post("/", createUser);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);

