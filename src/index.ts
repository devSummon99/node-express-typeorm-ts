import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>");
})

app.listen(process.env.PORT || 3000 , () =>  {
    console.log(`Server is listening on port ${3000}`);
})

export default app;