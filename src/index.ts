import express from "express";
import morgan from "morgan";
import cors from "cors";
import app from "./app";
import tasksRoutes  from "./routes/tasks.routes";
import usersRoutes  from "./routes/users.routes";
import { AppDataSource } from "./db/config";

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>");
});

app.use("/tasks", tasksRoutes );
app.use("/users", usersRoutes );

const db = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database online")
        app.listen(process.env.PORT || 3001 , () =>  {
            console.log(`Server on http://localhost:3001`);
        });
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message)
        }
    }
}
db();