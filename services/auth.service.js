import * as AuthRepo from "../repositories/auth.repository.js"

export const registerNewUser = async (data) => {
    return await AuthRepo.registerNewUser(data);
}

export const loginUser = async (data) => {
    return await AuthRepo.loginUser(data);
}

export const getUserData = async (id) => {
    return await AuthRepo.getUserData(id);
}

export const updateUser = async (id, data) => {
    return await AuthRepo.updateUser(id, data);
}