import express from "express";

const app = express();
const port: number = 3000;
app.use(express.json());

app.get("/health", (_req,res)=>{
    res.json({
        message: "Api is running"
    });
});
app.listen(port,()=>{
    console.log('server is running on port' + port);
});