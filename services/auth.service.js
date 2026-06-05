import * as AuthRepo from "../repositories/auth.repository.js"

export const registerNewUser = async (data) => {
    return await AuthRepo.registerNewUser(data);
}

export const loginUser = async (data) => {
    return await AuthRepo.loginUser(data);
}