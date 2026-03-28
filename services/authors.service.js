import * as authorsRepo from '../repositories/authors.repository.js'
import bcrypt from "bcryptjs";
export const getAllAuthors = async () => {
    return await authorsRepo.findAll();
}

export const getAuthorById = async (id) => {
    return await authorsRepo.findById(id);
}

export const createAuthor = async (data) => {
    // normalize username
    if (data.username) {
        data.username = data.username.toLowerCase();
    }

    // hash password
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return await authorsRepo.createAuthor(data);
}

export const deleteAuthor = async (id) => {
    return await authorsRepo.deleteAuthor(id);
}