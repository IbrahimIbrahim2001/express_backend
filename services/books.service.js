import * as booksRepo from "../repositories/books.repository.js";

export const getAllBooks = async () => {
    return await booksRepo.findAll();
}

export const getBookById = async (id) => {
    return await booksRepo.findOne(id);
}

export const createBook = async (data) => {
    return await booksRepo.createBook(data);
}

export const deleteBook = async (id) => {
    return await booksRepo.deleteBook(id);
}

export const updateBook = async (id, data) => {
    return await booksRepo.updateBook(id, data);
}