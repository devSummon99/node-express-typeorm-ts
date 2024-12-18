import express from "express";
import morgan from "morgan";
import cors from "cors";
import { userRoutes, taskRoutes, authRoutes } from "./routes/";
import app from "./app";
import { db } from "./db";
import { errorMiddleware } from "./middleware";


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(errorMiddleware)

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.use("/auth",authRoutes);

db();