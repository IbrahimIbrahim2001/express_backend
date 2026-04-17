import Books from "../models/books.js";

export const findAll = async () => {
    return await Books.find().populate("author");
}

export const findOne = async (id) => {
    return await Books.findById(id).populate("author");
}

export const createBook = async (data) => {
    const user = await Books.findOne({ title: data.title });
    if (user) {
        throw new Error("Book with this title already exists");
    }
    const book = new Books(data);
    return await book.save();
}

export const deleteBook = async (id) => {
    return await Books.findByIdAndDelete(id);
}

export const updateBook = async (id, data) => {
    const user = await Books.findOne({ title: data.title });
    if (user) {
        throw new Error("Book with this title already exists");
    }
    return await Books.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}