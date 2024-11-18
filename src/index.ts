import express from "express";
import morgan from "morgan";
import cors from "cors";

import { userRoutes, taskRoutes } from "./routes/";
import app from "./app";
import { db } from "./db";


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

db();