import mongoose from "mongoose";


const BooksSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Authors",
        required: true
    },
    price: { type: Number, required: true, min: 0 },
    genre: { type: String, required: true, trim: true },
}, { timestamps: true });

BooksSchema.index({ author: 1, title: 1 }, { unique: true });

const Books = mongoose.model("Books", BooksSchema);

export default Books;