import express from "express";
import {database} from "./config/database.js";

const app = express();
const port: number = 3000;
app.use(express.json());

app.get("/health", (_req,res)=>{
    res.json({
        message: "Api is running"
    });
});
app.get("/health/database", async (_req,res)=>{
    try {
        await database.query("SELECT 1");

        res.json({
            message: "Database is connected"
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(503).json({
            message: "database is not connected"
        });
    }
})
app.listen(port,()=>{
    console.log('server is running on port' + port);
});
