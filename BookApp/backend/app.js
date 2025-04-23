import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import Book from "./models/books.js";
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());


// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.post("/books",async(req,res)=>{
    try {
        const {title,author,date,image} = req.body;
        const book = new Book({title,author,date,image});
        await book.save();
        res.status(201).json({message: "Book created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});