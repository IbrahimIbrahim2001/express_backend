import * as authorsRepo from '../repositories/authors.repository.js'
import { hashPassword, normalizeAuthorUsername } from '../utils/authors.utils.js';
export const getAllAuthors = async () => {
    return await authorsRepo.findAll();
}

export const getAuthorById = async (id) => {
    return await authorsRepo.findById(id);
}

export const createAuthor = async (data) => {
    if (data.username) {
        data.username = normalizeAuthorUsername(data.username);
    }
    data.password = await hashPassword(data.password);

    return await authorsRepo.createAuthor(data);
}

export const deleteAuthor = async (id) => {
    return await authorsRepo.deleteAuthor(id);
}

export const updateAuthor = async (id, data) => {
    if (data.username) {
        data.username = normalizeAuthorUsername(data.username);
    }
    return await authorsRepo.updateAuthor(id, data);
}