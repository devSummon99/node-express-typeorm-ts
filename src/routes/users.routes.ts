import { Router } from "express";
import { getUsers, getUserByID, createUser, updateUser, deleteUser } from "../controllers";
import { isAdmin, verifyToken } from "../middleware/";

export const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserByID);

userRoutes.post("/", [verifyToken ], createUser);

userRoutes.put("/:id",[verifyToken] , updateUser);

userRoutes.delete("/:id", [verifyToken]  ,deleteUser);

