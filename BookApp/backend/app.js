import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});