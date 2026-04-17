import Authors from "../models/authors.js";

export const findAll = async () => {
    return await Authors.find().populate("books");
}

export const findById = async (id) => {
    return await Authors.findById(id).populate("books");
}

export const createAuthor = async (data) => {
    const author = new Authors(data);
    return await author.save();
}

export const deleteAuthor = async (id) => {
    return await Authors.findByIdAndDelete(id);
}

export const updateAuthor = async (id, data) => {
    return await Authors.findByIdAndUpdate(id, data, { new: true });
}