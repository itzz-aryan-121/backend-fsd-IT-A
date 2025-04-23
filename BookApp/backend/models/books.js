import mongoose from "mongoose";

const bookSchema =  new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    author:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        default: Date.now,
        required: true,
    },
    image:{
        type: String,
        // required: true,
    }


})


const Book = mongoose.model("Book", bookSchema);

export default Book;