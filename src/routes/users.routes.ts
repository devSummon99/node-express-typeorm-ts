import { Router } from "express";
import { getUsers, getUserByID, createUser, updateUser, deleteUser } from "../controllers/users.controller";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserByID);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;