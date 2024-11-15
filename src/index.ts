import express from "express";
import morgan from "morgan";
import cors from "cors";
import app from "./app";

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>");
})


app.listen(process.env.PORT || 3001 , () =>  {
    console.log(`Server on http://localhost:3001`);
})
